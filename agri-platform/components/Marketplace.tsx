"use client";

import { useMemo, useState, type ChangeEvent } from "react";
import { ProductApiView } from "@/types/product";

type Props = {
  initialProducts: ProductApiView[];
  defaultRegion: "IN" | "US";
};

export function Marketplace({ initialProducts, defaultRegion }: Props) {
  const [products, setProducts] = useState<ProductApiView[]>(initialProducts);
  const [region, setRegion] = useState<"IN" | "US">(defaultRegion);
  const [advice, setAdvice] = useState("");
  const [seedCheckMessage, setSeedCheckMessage] = useState("");

  const seasonalCount = useMemo(() => products.filter((p: ProductApiView) => p.inSeason).length, [products]);

  const loadProducts = async (nextRegion: "IN" | "US") => {
    setRegion(nextRegion);
    const response = await fetch(`/api/products?region=${nextRegion}`);
    const data: ProductApiView[] = await response.json();
    setProducts(data);
  };

  const requestAdvice = async (formData: FormData) => {
    const payload = {
      crop: String(formData.get("crop") || "wheat"),
      soilType: String(formData.get("soilType") || "loamy"),
      weatherSummary: String(formData.get("weatherSummary") || "mild"),
      region
    };

    const response = await fetch("/api/advice", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    setAdvice(data.advice || "No advice returned.");
  };

  const submitSeedCheck = async (formData: FormData) => {
    const payload = {
      farmerName: String(formData.get("farmerName") || ""),
      phone: String(formData.get("phone") || ""),
      seedType: String(formData.get("seedType") || ""),
      notes: String(formData.get("notes") || "")
    };

    const response = await fetch("/api/seed-checks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    setSeedCheckMessage(data.message || "Request sent.");
  };

  return (
    <main style={{ maxWidth: 980, margin: "24px auto", fontFamily: "Arial, sans-serif" }}>
      <h1>Agriculture E-commerce Platform</h1>
      <p>Built with Next.js + Node.js APIs + MongoDB + LLM advisory.</p>

      <section>
        <h2>Seasonal Marketplace</h2>
        <div>
          <label htmlFor="region">Region: </label>
          <select
            id="region"
            value={region}
            onChange={(event: ChangeEvent<HTMLSelectElement>) => loadProducts(event.target.value as "IN" | "US")}
          >
            <option value="IN">India</option>
            <option value="US">United States</option>
          </select>
        </div>
        <p>{seasonalCount} of {products.length} products currently in season.</p>
        <ul>
          {products.map((product: ProductApiView) => (
            <li key={product.id}>
              <strong>{product.name}</strong> - ${product.unitPrice} - {product.inSeason ? "Available" : "Unavailable (Out of season)"}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Farming Quality Advice (LLM)</h2>
        <form action={requestAdvice}>
          <input name="crop" placeholder="Crop (e.g. wheat)" required />
          <input name="soilType" placeholder="Soil type" required />
          <input name="weatherSummary" placeholder="Weather summary" required />
          <button type="submit">Get AI Advice</button>
        </form>
        {advice && <p>{advice}</p>}
      </section>

      <section>
        <h2>Seed Check Request</h2>
        <form action={submitSeedCheck}>
          <input name="farmerName" placeholder="Farmer name" required />
          <input name="phone" placeholder="Phone number" required />
          <input name="seedType" placeholder="Seed type" required />
          <textarea name="notes" placeholder="Seed issue details" required />
          <button type="submit">Submit Seed Check</button>
        </form>
        {seedCheckMessage && <p>{seedCheckMessage}</p>}
      </section>
    </main>
  );
}
