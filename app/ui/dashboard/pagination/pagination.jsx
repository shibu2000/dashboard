"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

const Pagination = ({ count }) => {
  const serachParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const params = new URLSearchParams(serachParams);
  const page = params.get("page") || 1;
  const ITEM_PER_PAGE = 5;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;
  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);

    replace(`${pathName}?${params}`);
  };

  return (
    <div className="flex justify-between text-xs font-bold mt-2">
      <button
        className=" p-2 bg-slate-300 text-black rounded-md disabled:bg-slate-400 disabled:cursor-not-allowed"
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Prevoius
      </button>
      <button
        className=" px-5 py-2 bg-slate-300 text-black rounded-md disabled:bg-slate-400 disabled:cursor-not-allowed"
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
