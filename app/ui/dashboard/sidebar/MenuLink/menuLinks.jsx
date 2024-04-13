"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLinks = ({ item }) => {
  const pathname = usePathname();
  return (
    <Link
      href={item.path}
      className={`flex py-2 pl-4 items-center gap-1 hover:bg-slate-700 my-2 rounded-md 
      ${pathname === item.path ? "bg-slate-700" : ""}
      `}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLinks;
