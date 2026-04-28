import mongoose, { Model, Schema } from "mongoose";
import { ProductCode, Region } from "@/lib/season";

export type ProductDocument = {
  name: string;
  code: ProductCode;
  region: Region;
  unitPrice: number;
  stock: number;
};

const ProductSchema = new Schema<ProductDocument>(
  {
    name: { type: String, required: true },
    code: { type: String, required: true },
    region: { type: String, enum: ["IN", "US"], required: true },
    unitPrice: { type: Number, required: true },
    stock: { type: Number, required: true }
  },
  { timestamps: true }
);

export const Product: Model<ProductDocument> =
  mongoose.models.Product || mongoose.model<ProductDocument>("Product", ProductSchema);
