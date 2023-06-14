"use client";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import BlogFilterSortMobile from "./BlogFilterSortMobile/BlogFilterSortMobile";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const sortOptions = [
  { label: "جدید ترین", value: "newest" },
  { label: "محبوب ترین", value: "popular" },
  { label: "پربازدید ترین", value: "most" },
];

const BlogFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const pageParam = params.get("page");

  const sortHandler = (value) => {
    pageParam
      ? router.push(`${pathname}?page=${pageParam}&sort=${value}`)
      : router.push(`${pathname}?sort=${value}`);
  };

  return (
    <div className="col-span-12 flex order-2 md:order-2 md:flex items-center gap-6 md:px-5 md:col-span-9 rounded-2xl bg-white  md:border shadow-md border border-gray-300 justify-end">
      <div className="hidden md:flex gap-4 items-baseline h-full">
        {sortOptions.map((option) => {
          return (
            <button
              onClick={() => sortHandler(option.value)}
              key={option.value}
              className={` h-full    ${
                params.get("sort") === option.value
                  ? "text-purple-600 border-b-2 border-purple-600"
                  : "text-gray-600 hover:text-blue-500"
              } font-medium focus:relative`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
      <div className="hidden md:flex gap-2 items-center">
        <p className="font-semibold text-gray-700">:مرتب سازی</p>
        <HiOutlineAdjustmentsHorizontal size={24} />
      </div>
      <BlogFilterSortMobile />
    </div>
  );
};

export default BlogFilter;
