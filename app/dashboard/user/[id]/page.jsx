import Image from "next/image";
import style from "./singleuser.module.css";
import { fetchOneUser } from "@/app/lib/userData";
import { updateUser } from "@/app/lib/action/userAction";

const SingleUserPage = async ({ params }) => {
  const { id } = params;

  const user = await fetchOneUser(id);

  return (
    <div className="p-1">
      <form action={updateUser} className={`${style.form} flex justify-around`}>
        <div className="text-center space-y-2 _bgSoft p-2 rounded-md h-max">
          <label htmlFor="img">
            <Image
              priority
              src={user.img || "/noavatar.png"}
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
          <h3>{user.username}</h3>
        </div>
        <div className="_bgSoft p-2 w-3/4 rounded-md space-y-3">
          <input name="id" type="hidden" value={user.id} />

          <div className="form-group">
            <label htmlFor="">Username</label>
            <input
              name="username"
              id="username"
              type="text"
              placeholder={user.username}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder={user.email}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input name="password" id="password" type="password" />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              name="phone"
              id="phone"
              type="text"
              placeholder={user.phone}
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea name="address" id="address" placeholder={user.address} />
          </div>

          <div className="form-group">
            <label htmlFor="isAdmin">IsAdmin?</label>
            <select id="isAdmin" name="isAdmin" defaultValue={user.isAdmin}>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="isActive">IsActive?</label>
            <select id="isActive" name="isActive" defaultValue={user.isActive}>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
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

export default SingleUserPage;
