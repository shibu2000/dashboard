import { revalidatePath } from "next/cache";
import { connectToDB } from "../dbConnection";
import { Product } from "../model/productModel";
import { redirect } from "next/navigation";

export const addProduct = async (formData) => {
  "use server";
  const { title, category, price, stock, color, size, description } =
    Object.fromEntries(formData);
  try {
    connectToDB();
    const newProduct = new Product({
      title,
      category,
      price,
      stock,
      color,
      size,
      description,
    });
    await newProduct.save();
  } catch (error) {
    console.log("Error");
    throw new Error(error);
  }
  revalidatePath("/dashboard/product");
  redirect("/dashboard/product");
};

export const updateProduct = async (formData) => {
  "use server";
  const { id, title, category, price, stock, color, size, description } =
    Object.fromEntries(formData);
  const updateFields = {
    id,
    title,
    category,
    price,
    stock,
    color,
    size,
    description,
  };

  Object.keys(updateFields).forEach((key) => {
    if (updateFields[key] === "" || updateFields[key] === undefined)
      delete updateFields[key];
  });
  try {
    connectToDB();
    await Product.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log("Failed to update! Try again!!");
    throw new Error(error);
  }
  revalidatePath("/dashboard/product");
  redirect("/dashboard/product");
};

export const deleteProduct = async (formData) => {
  "use server";
  const { id } = Object.fromEntries(formData);
  try {
    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log("Error");
    throw new Error(error);
  }
  revalidatePath("/dashboard/product");
};
