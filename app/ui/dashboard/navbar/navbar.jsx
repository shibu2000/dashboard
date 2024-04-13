"use client";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import SearchBox from "../searchBox/searchBox";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex _bgSoft p-2 justify-between items-center rounded-md">
      <div className="capitalize">{pathname.split("/").pop()}</div>
      <div className="flex gap-4 items-center">
        <SearchBox placeholder="Search..." />
        <div className="flex gap-4">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
