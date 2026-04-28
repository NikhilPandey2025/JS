import { Marketplace } from "@/components/Marketplace";
import { connectToDatabase } from "@/lib/mongodb";
import { Product } from "@/models/Product";
import { isInSeason } from "@/lib/season";

export default async function HomePage() {
  await connectToDatabase();

  const region = (process.env.DEFAULT_REGION === "US" ? "US" : "IN") as "IN" | "US";
  const month = new Date().getMonth() + 1;
  const products = await Product.find({ region }).lean();

  const initialProducts = products.map((product: any) => ({
    id: product._id.toString(),
    name: product.name,
    code: product.code,
    unitPrice: product.unitPrice,
    stock: product.stock,
    inSeason: isInSeason(product.code, month, region)
  }));

  return <Marketplace initialProducts={initialProducts} defaultRegion={region} />;
}
