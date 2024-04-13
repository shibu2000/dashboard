"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MdSearch } from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";

const SearchBox = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);
    if (e.target.value) {
      params.set("query", e.target.value);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params}`);
  }, 400);

  return (
    <div className="flex items-center bg-slate-700 rounded-full px-1 h-10">
      <MdSearch className="mx-1" />
      <input
        id="search"
        type="text"
        className="bg-slate-700 rounded-full outline-none border-none"
        placeholder={placeholder}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBox;
