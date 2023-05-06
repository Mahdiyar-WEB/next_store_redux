import { IoIosArrowDown } from "react-icons/io";
import BlogTabsMobile from "./BlogTabsMobile/BlogTabsMobile";

const BlogAside = ({ handleShowCategory, showCategory }) => {
  return (
    <aside className="col-span-12 order-1 md:order-2 mb-2 md:mb-0 md:block md:row-span-2 md:col-span-3">
      <div className="hidden md:block">
        <button
          onClick={() => handleShowCategory()}
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
        <div
          className={`bg-white flex flex-col  border shadow py-4 rounded-b-lg transition ease-linear  ${
            showCategory
              ? "delay-100 duration-300 opacity-1"
              : "opacity-0 flex-grow-0"
          }`}
        >
          <button className="focus:bg-purple-600 hover:bg-purple-50  focus:text-white cursor-pointer px-4 text-end py-2">
            salam
          </button>
          <button className="focus:bg-purple-600 hover:bg-purple-50  focus:text-white cursor-pointer px-4 text-end py-2">
            salam
          </button>
          <button className="focus:bg-purple-600 hover:bg-purple-50  focus:text-white cursor-pointer px-4 text-end py-2">
            salam
          </button>
          <button className="focus:bg-purple-600 hover:bg-purple-50  focus:text-white cursor-pointer px-4 text-end py-2">
            salam
          </button>
          <button className="focus:bg-purple-600 hover:bg-purple-50  focus:text-white cursor-pointer px-4 text-end py-2">
            salam
          </button>
        </div>
      </div>
      <BlogTabsMobile />
    </aside>
  );
};

export default BlogAside;
