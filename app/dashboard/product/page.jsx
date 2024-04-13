import { deleteProduct } from "@/app/lib/action/productAction";
import { fetchProducts } from "@/app/lib/productData";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import SearchBox from "@/app/ui/dashboard/searchBox/searchBox";
import Image from "next/image";
import Link from "next/link";

const Product = async ({ searchParams }) => {
  const query = searchParams?.query || "";
  const page = searchParams?.page || 1;

  const { count, products } = await fetchProducts(query, page);

  // console.log(products);
  // console.log(count);

  return (
    <div>
      <div className="_bgSoft p-4 rounded-md">
        <div className="flex justify-between">
          <SearchBox placeholder="Search product..." />
          <Link href="/dashboard/product/add">
            <button className="text-xs p-2 bg-purple-800 rounded-md">
              Add New
            </button>
          </Link>
        </div>
        <table className="w-full text-sm border-separate border-spacing-5">
          <thead>
            <tr>
              <td>Title</td>
              <td>Description</td>
              <td>Price</td>
              <td>Created at</td>
              <td>Stock</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product.id}>
                  <td>
                    <div className="flex gap-2 items-center">
                      <Image
                        src={product.img ? product.img : "/noavatar.png"}
                        alt="noavatar"
                        width={30}
                        height={30}
                        className="object-cover rounded-full"
                      />
                      {product.title}
                    </div>
                  </td>
                  <td>{product.description}</td>
                  <td>₹{product.price}</td>
                  <td>{product.createdAt?.toString().slice(4, 16)}</td>
                  <td>{product.stock}</td>
                  <td>
                    <div className="text-xs flex flex-wrap gap-2">
                      <Link href={`/dashboard/product/${product.id}`}>
                        <button className="bg-emerald-800 px-2 py-1 rounded-md">
                          View
                        </button>
                      </Link>
                      <form action={deleteProduct}>
                        <input type="hidden" name="id" value={product.id} />
                        <button
                          type="submit"
                          className="bg-red-800 px-2 py-1 rounded-md"
                        >
                          Delete
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination count={count} />
      </div>
    </div>
  );
};

export default Product;
