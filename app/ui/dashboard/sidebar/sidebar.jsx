import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuLinks from "./MenuLink/menuLinks";
import style from "./Sidebar.module.css";
import { auth, signOut } from "@/auth";
import Image from "next/image";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/user",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/product",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = async () => {
  const { user } = await auth();

  return (
    <div className={`${style.sidebar} p-2 h-screen sticky top-0`}>
      <div className="flex gap-3 py-2 items-center">
        <Image
          src={user.img || "/noavatar.png"}
          height={50}
          width={50}
          alt="user_image"
          className="rounded-full"
        />
        <div>
          <p>{user.username}</p>
          <p className="text-xs">
            {user.isAdmin ? "Administrator" : "Passive"}
          </p>
        </div>
      </div>

      <ul>
        {menuItems.map((cat) => {
          return (
            <li key={cat.title}>
              <span>{cat.title}</span>
              {cat.list.map((item) => {
                return <MenuLinks key={item.title} item={item} />;
              })}
            </li>
          );
        })}
      </ul>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit" className="py-2 pl-4">
          Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
