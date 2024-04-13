import { deleteUser } from "@/app/lib/action/userAction";
import { fetchUsers } from "@/app/lib/userData";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import SearchBox from "@/app/ui/dashboard/searchBox/searchBox";
import Image from "next/image";
import Link from "next/link";

const User = async ({ searchParams }) => {
  const query = searchParams?.query || "";
  const page = searchParams?.page || 1;

  const { count, users } = await fetchUsers(query, page);

  return (
    <div className="_bgSoft p-4 rounded-md">
      <div className="flex justify-between">
        <SearchBox placeholder="Search user..." />
        <Link href="/dashboard/user/add">
          <button className="text-xs p-2 bg-purple-800 rounded-md">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full text-sm border-separate border-spacing-5">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created at</td>
            <td>Role</td>
            <td>Action</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>
                  <div className="flex gap-2 items-center">
                    <Image
                      src={user.img ? user.img : "/noavatar.png"}
                      alt="noavatar"
                      width={30}
                      height={30}
                      className="object-cover rounded-full"
                    />
                    {user.username}
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.createdAt?.toString().slice(4, 16)}</td>
                <td>{user.isAdmin ? "Admin" : "Client"}</td>
                <td>{user.isActive ? "Active" : "Passive"}</td>
                <td>
                  <div className="text-xs flex flex-wrap gap-2">
                    <Link href={`/dashboard/user/${user.id}`}>
                      <button className="bg-emerald-800 px-2 py-1 rounded-md">
                        View
                      </button>
                    </Link>
                    <form action={deleteUser}>
                      <input type="hidden" name="id" value={user.id} />
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
  );
};

export default User;
