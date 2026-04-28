import OpenAI from "openai";

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  throw new Error("Missing OPENAI_API_KEY in environment variables");
}

const openai = new OpenAI({ apiKey });

export async function generateFarmingAdvice(input: {
  crop: string;
  soilType: string;
  weatherSummary: string;
  region: string;
}) {
  const model = process.env.OPENAI_MODEL || "gpt-4.1-mini";

  const response = await openai.responses.create({
    model,
    input: [
      {
        role: "system",
        content: "You are an agronomist assistant. Give concise, practical, season-aware guidance with safety caveats."
      },
      {
        role: "user",
        content: `Crop: ${input.crop}\nSoil: ${input.soilType}\nRegion: ${input.region}\nWeather: ${input.weatherSummary}\nProvide fertilization, irrigation, pest, and harvest tips.`
      }
    ]
  });

  return response.output_text;
}
