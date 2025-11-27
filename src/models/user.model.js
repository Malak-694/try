import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    phone: { type: String, trim: true },
    role: {
      type: String,
      enum: ["customer", "tailor","material_seller","admin"],
      default: "customer",
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);