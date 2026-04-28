import mongoose, { Model, Schema } from "mongoose";

export type SeedCheckDocument = {
  farmerName: string;
  phone: string;
  seedType: string;
  notes: string;
  status: "pending" | "in_review" | "resolved";
};

const SeedCheckSchema = new Schema<SeedCheckDocument>(
  {
    farmerName: { type: String, required: true },
    phone: { type: String, required: true },
    seedType: { type: String, required: true },
    notes: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "in_review", "resolved"],
      default: "pending"
    }
  },
  { timestamps: true }
);

export const SeedCheck: Model<SeedCheckDocument> =
  mongoose.models.SeedCheck || mongoose.model<SeedCheckDocument>("SeedCheck", SeedCheckSchema);
