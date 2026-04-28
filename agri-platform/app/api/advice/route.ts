import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { generateFarmingAdvice } from "@/lib/llm";

const adviceSchema = z.object({
  crop: z.string().min(2),
  soilType: z.string().min(2),
  weatherSummary: z.string().min(3),
  region: z.string().min(2)
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const parsed = adviceSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid advice request" }, { status: 400 });
  }

  const advice = await generateFarmingAdvice(parsed.data);
  return NextResponse.json({ advice });
}
