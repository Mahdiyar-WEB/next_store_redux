"use client";
import CategoryDetails from "@/components/CategoryDetails/CategoryDetails";
import SortCategories from "@/components/SortCategories/SortCategories";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import Blog from "@/components/Blog/Blog";
import reactImage from "@/public/images/react.png";
import vueImage from "@/public/images/vue.png";
import nextImage from "@/public/images/next.jpg";
import mahdiyarImage from "@/public/images/mahdiyar.jpeg";

const Blogs = () => {
  const [showCategory, setShowCategory] = useState(false);
  return (
    <main className="md:px-7 pt-20">
      <div className="max-w-screen-2xl mx-auto grid gap-10 md:grid-cols-12 md:grid-rows-[70px_minmax(300px,_1fr)]">
        <div className="hidden md:flex items-center gap-6 px-5 md:col-span-9 rounded-2xl bg-white border shadow justify-end">
          <SortCategories />
          <div className="flex gap-2 items-center">
            <p className="font-semibold text-gray-700">:مرتب سازی</p>
            <HiOutlineAdjustmentsHorizontal size={24} />
          </div>
        </div>
        <aside className="hidden md:block md:row-span-2 md:col-span-3">
          <div>
            <button
              onClick={() => setShowCategory(!showCategory)}
              className={`relative transition-all  flex justify-between w-full rounded-2xl bg-purple-100 px-10 py-6 ${
                showCategory ? "rounded-b-none" : "delay-150"
              }`}
            >
              <IoIosArrowDown
                className={`${
                  showCategory && "rotate-180"
                } transition duration-200 ease-linear`}
                size={22}
              />
              <span>دسته بندی مقالات</span>
            </button>
            <CategoryDetails showCategory={showCategory} />
          </div>
        </aside>
        <article className="md:col-span-9 grid grid-cols-12 gap-y-8 md:gap-x-8">
          <Blog authorImage={mahdiyarImage} authorName="مهدیار" category="ریکت" title="ریکت چیست؟" alt="react" image={reactImage} />
          <Blog authorImage={mahdiyarImage} authorName="مهدیار" category="ویو" title="ویو چیست؟" alt="vue" image={vueImage} />
          <Blog authorImage={mahdiyarImage} authorName="مهدیار" category="نکست" title="نکست چیست؟" alt="next" image={nextImage} />
        </article>
      </div>
    </main>
  );
};

export default Blogs;
