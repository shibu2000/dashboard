import { revalidatePath } from "next/cache";
import { connectToDB } from "../dbConnection";
import { User } from "../model/userModel";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "@/auth";

export const addUser = async (formData) => {
  "use server";
  const { username, email, password, phone, isAdmin, isActive, address } =
    Object.fromEntries(formData);
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  try {
    connectToDB();
    const newUser = new User({
      username,
      password: hashedPassword,
      email,
      phone,
      address,
      isAdmin: isAdmin ? true : false,
      isActive: isActive ? true : false,
    });
    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }

  revalidatePath("/dashboard/user");
  redirect("/dashboard/user");
};

export const updateUser = async (formData) => {
  "use server";
  const { id, username, email, password, phone, isAdmin, isActive, address } =
    Object.fromEntries(formData);
  if (password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
  }
  try {
    connectToDB();
    const updateFields = {
      username,
      email,
      password,
      phone,
      isAdmin,
      isActive,
      address,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    // await User.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }

  revalidatePath("/dashboard/user");
  redirect("/dashboard/user");
};

export const deleteUser = async (formData) => {
  "use server";
  const { id } = Object.fromEntries(formData);
  try {
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }

  revalidatePath("/dashboard/user");
};

export const authenticate = async (formData) => {
  "use server";
  const { username, password } = Object.fromEntries(formData);
  try {
    connectToDB();
    await signIn("credentials", { username, password });
  } catch (error) {
    throw error;
  }
};
