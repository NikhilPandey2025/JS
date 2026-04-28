import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { connectToDatabase } from "@/lib/mongodb";
import { isInSeason, Region } from "@/lib/season";
import { Product } from "@/models/Product";

const querySchema = z.object({
  region: z.enum(["IN", "US"]).default("IN")
});

export async function GET(request: NextRequest) {
  await connectToDatabase();

  const regionInput = request.nextUrl.searchParams.get("region") ?? "IN";
  const parsed = querySchema.safeParse({ region: regionInput });

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid region" }, { status: 400 });
  }

  const region = parsed.data.region as Region;
  const month = new Date().getMonth() + 1;
  const products = await Product.find({ region }).lean();

  return NextResponse.json(
    products.map((p: any) => ({
      id: p._id.toString(),
      name: p.name,
      code: p.code,
      unitPrice: p.unitPrice,
      stock: p.stock,
      inSeason: isInSeason(p.code, month, region)
    }))
  );
}
