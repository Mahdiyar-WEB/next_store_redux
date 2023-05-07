"use client";
import { IoIosArrowDown } from "react-icons/io";
import BlogTabsMobile from "./BlogTabsMobile/BlogTabsMobile";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BlogAside = ({ blogTabs:tabs }) => {
  const [showCategory, setShowCategory] = useState(false);
  const pathname = usePathname();

  return (
    <aside className="col-span-12 order-1 md:order-2 mb-2 md:mb-0 md:block md:row-span-2 md:col-span-3">
      <div className="hidden md:block">
        <button
          onClick={() => setShowCategory(!showCategory)}
          className={`relative transition-all  flex justify-between w-full rounded-2xl text-sm lg:text-base bg-purple-100 xl:px-10 xl:py-6  md:px-3 md:py-6 ${
            showCategory ? "rounded-b-none" : "delay-150"
          }`}
        >
          <IoIosArrowDown
            className={`${
              showCategory && "rotate-180"
            } transition duration-200 ease-linear`}
            size={20}
          />
          <span>دسته بندی مقالات</span>
        </button>
        <div
          className={`bg-white  border shadow py-4 rounded-b-lg transition ease-linear  ${
            showCategory ? "delay-100 duration-300 flex flex-col " : "hidden"
          }`}
        >
          <button
            className={`cursor-pointer text-end ${
              pathname.split("/").reverse()[0] === "blogs"
                ? "bg-purple-600 text-white"
                : "hover:bg-purple-50"
            }`}
          >
            <Link className="block px-4 py-2" href="/blogs">
              همه پست ها
            </Link>
          </button>
          {tabs.map(({ _id, title, englishTitle }) => {
            return (
              <button
                key={_id}
                className={`cursor-pointer text-end ${
                  pathname.split("/").reverse()[0] === englishTitle
                    ? "bg-purple-600 text-white"
                    : "hover:bg-purple-50"
                }`}
              >
                <Link
                  className="block px-4 py-2"
                  prefetch={true}
                  href={`/blogs/${englishTitle}`}
                >
                  {title}
                </Link>
              </button>
            );
          })}
        </div>
      </div>
      <BlogTabsMobile tabs={tabs} />
    </aside>
  );
};

export default BlogAside;
