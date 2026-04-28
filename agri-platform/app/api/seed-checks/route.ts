import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { connectToDatabase } from "@/lib/mongodb";
import { SeedCheck } from "@/models/SeedCheck";

const seedCheckSchema = z.object({
  farmerName: z.string().min(2),
  phone: z.string().min(8),
  seedType: z.string().min(2),
  notes: z.string().min(5)
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const parsed = seedCheckSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid seed-check payload" }, { status: 400 });
  }

  await connectToDatabase();
  const created = await SeedCheck.create(parsed.data);

  return NextResponse.json(
    {
      id: created._id.toString(),
      message: "Seed-check request submitted. Agronomist response expected within 24 hours."
    },
    { status: 201 }
  );
}
