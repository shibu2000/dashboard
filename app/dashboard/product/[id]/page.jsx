import Image from "next/image";
import style from "./singleproduct.module.css";
import { fetchProductById } from "@/app/lib/productData";
import { updateProduct } from "@/app/lib/action/productAction";
const SingleProduct = async ({ params }) => {
  const { id } = params;
  const product = await fetchProductById(id);

  return (
    <div className=" p-1">
      <form action={updateProduct} className={`${style.form} flex justify-around`}>
        <div className="text-center space-y-2 _bgSoft p-2 rounded-md h-max">
          <label htmlFor="img">
            <Image
              priority
              src={"/noavatar.png"}
              alt="user_image"
              width={200}
              height={200}
              className="cursor-pointer"
            />
          </label>
          <input
            type="file"
            accept=".jpg, .png, .jpeg"
            name="img"
            id="img"
            className="hidden"
          />
          <h3>{product.title}</h3>
        </div>
        <div className="_bgSoft p-2 w-3/4 rounded-md space-y-3">
          <input type="hidden" name="id" value={product.id} />

          <div className="input-group">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder={product.title}
            />
          </div>

          <div className="input-group">
            <label htmlFor="category">Choose Category</label>
            <select
              id="category"
              name="categry"
              defaultValue={product.category}
            >
              <option value="General">General</option>
              <option value="Electronics">Electronics</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="price">Price</label>
            <input
              id="price"
              name="price"
              type="number"
              placeholder={product.price}
            />
          </div>

          <div className="input-group">
            <label htmlFor="stock">Stock</label>
            <input
              id="stock"
              name="stock"
              type="number"
              placeholder={product.stock}
            />
          </div>
          <div className="input-group">
            <label htmlFor="color">Color</label>
            <input
              id="color"
              name="color"
              type="text"
              placeholder={product.color}
            />
          </div>
          <div className="input-group">
            <label htmlFor="size">Size</label>
            <input
              id="size"
              name="size"
              type="text"
              placeholder={product.color}
            />
          </div>

          <div className="input-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder={product.description}
            />
          </div>
          <div className="text-center ">
            <button
              type="submit"
              className="bg-slate-600 hover:bg-slate-700 w-2/3 p-3 rounded-md text-white"
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SingleProduct;
