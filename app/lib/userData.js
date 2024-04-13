import { User } from "./model/userModel";
import { connectToDB } from "./dbConnection";

export const fetchUsers = async (query, page) => {
  const regex = new RegExp(query, "i");

  const ITEM_PER_PAGE = 5;

  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const fetchOneUser = async (id) => {
  try {
    connectToDB();
    const user = await User.findById(id)
    return user;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
