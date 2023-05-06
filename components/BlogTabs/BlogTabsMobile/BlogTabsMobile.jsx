"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const CategoryDetailsMobile = ({ tabs }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleRedirect = (href) => {
    pathname.split("/").reverse()[0] === href
      ? router.push("/blogs")
      : router.push(`/blogs/${href}`);
  };
  
  return (
    <div
      className="md:hidden flex justify-center w-full gap-2 overflow-auto pb-5 px-2"
      dir="rtl"
    >
      {tabs.map(({ title, englishTitle, _id }) => {
        return (
          <button
            key={_id}
            className={`  border rounded-3xl  px-4 py-1 whitespace-nowrap ${
              pathname.split("/").reverse()[0] === englishTitle
                ? "border-purple-400 bg-purple-50 text-purple-600"
                : "bg-white border-gray-400 text-gray-500"
            }`}
            onClick={() => handleRedirect(englishTitle)}
          >
            {title}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryDetailsMobile;
