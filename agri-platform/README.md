# Agri Platform (Next.js + Node.js + MongoDB + LLM)

This is a production-style starter for your agriculture e-commerce website using:
- **React + Next.js** (frontend + API routes)
- **Node.js runtime** through Next API handlers
- **MongoDB + Mongoose** for products and seed-check workflows
- **LLM integration** for farming quality advice generation

## Core capabilities implemented
1. Seasonal product locking by region and month.
2. LLM-driven crop guidance endpoint.
3. Seed quality check request endpoint.
4. Region toggle (India/US) with season-aware availability.

## Setup
```bash
cd agri-platform
cp .env.example .env.local
npm install
npm run dev
```

## Required environment
- `MONGODB_URI`
- `OPENAI_API_KEY`
- `OPENAI_MODEL` (optional)
- `DEFAULT_REGION` (`IN` or `US`)

## API endpoints
- `GET /api/products?region=IN|US`
- `POST /api/advice`
- `POST /api/seed-checks`
