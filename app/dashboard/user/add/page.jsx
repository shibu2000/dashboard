import { addUser } from "@/app/lib/action/userAction";
import style from "./add.module.css";

const Page = () => {
  return (
    <div className="text-black px-8">
      <form
        action={addUser}
        className={`${style.form} flex flex-wrap gap-5 justify-between`}
      >
        <input type="text" name="username" placeholder="username" />

        <input type="email" name="email" placeholder="email" />

        <input type="password" name="password" placeholder="password" />
        <input type="text" name="phone" placeholder="phone" />

        <select defaultValue="default" name="isAdmin">
          <option hidden value="default">
            IsAdmin
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <select defaultValue="default" name="isActive">
          <option hidden value="default">
            IsActive
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea name="address" rows={10} placeholder="address" />
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
