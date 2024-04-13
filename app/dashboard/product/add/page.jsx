import { addProduct } from "@/app/lib/action/productAction";
import style from "./add.module.css";

const Page = () => {
  return (
    <div className="text-black px-8">
      <form
        action={addProduct}
        className={`${style.form} flex flex-wrap gap-5 justify-between`}
      >
        <input type="text" placeholder="title" name="title" />

        <select defaultValue="default" name="category" required>
          <option hidden value="default">
            Choose a category
          </option>
          <option value="general">General</option>
          <option value="electronics">Electronics</option>
          <option value="elecrical">Electrical</option>
          <option value="grocery">Grocery</option>
        </select>

        <input type="number" placeholder="price" name="price" />

        <input type="text" placeholder="stock" name="stock" />

        <input type="text" placeholder="color" name="color" />

        <input type="text" placeholder="size" name="size" />

        <textarea
          name="description"
          id=""
          rows="10"
          placeholder="description"
        />

        <div className="text-center w-full">
          <button
            type="submit"
            className="bg-slate-600 hover:bg-slate-700 w-2/3 p-3 rounded-md text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
