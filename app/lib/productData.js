import { connectToDB } from "./dbConnection";
import { Product } from "./model/productModel";

export const fetchProducts = async (query, page) => {
  const regex = new RegExp(query, "i");
  const ITEM_PER_PAGE = 5;
  try {
    connectToDB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const fetchProductById = async (id) => {
  try {
    connectToDB();
    const product = await Product.findById(id);
    return product;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
