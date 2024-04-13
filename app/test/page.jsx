import { fetchProductById } from "../lib/productData";

const handleSubmit = async (formData) => {
  "use server";
  console.log(formData.get("username"));
};

const Page = async () => {
  const id = "65f86ec6e23eb36b8899b5f4";
  const product = await fetchProductById(id);
  console.log(product);
  return (
    <div>
      <form action={handleSubmit}>
        <label htmlFor="name">Username</label>
        <br />
        <input
          id="name"
          type="text"
          name="username"
          className="_bgSoft h-10 p-1"
        />
        <br />
        <button type="submit" className="bg-slate-700 p-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Page;
