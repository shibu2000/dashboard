import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 8,
      max: 20,
    },
    password: {
      type: String,
      required: true,
      min: 8,
      max: 16,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      max: 12,
    },
    address: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    img: {
      type: String,
    },
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
