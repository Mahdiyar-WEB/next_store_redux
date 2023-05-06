import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import BlogFilterSortMobile from "./BlogFilterSortMobile/BlogFilterSortMobile";

const BlogFilter = () => {
  return (
    <div className="col-span-12 flex order-2 md:order-2 md:flex items-center gap-6 md:px-5 md:col-span-9 rounded-2xl bg-white border-none md:border shadow justify-end">
      <div className="hidden md:flex gap-4 items-baseline h-full">
        <button className="hover:text-blue-500 h-full focus:border-b-2 border-purple-600 text-gray-600 focus:text-purple-600 font-medium focus:relative">
          جدید ترین
        </button>
        <button className="hover:text-blue-500 h-full focus:border-b-2 border-purple-600 text-gray-600 focus:text-purple-600 font-medium focus:relative">
          پربازدید ترین
        </button>
        <button className="hover:text-blue-500 h-full focus:border-b-2 border-purple-600 text-gray-600 focus:text-purple-600 font-medium focus:relative">
          محبوب ترین
        </button>
      </div>
      <div className="hidden md:flex gap-2 items-center">
        <p className="font-semibold text-gray-700">:مرتب سازی</p>
        <HiOutlineAdjustmentsHorizontal size={24} />
      </div>
      <BlogFilterSortMobile/>
    </div>
  );
};

export default BlogFilter;
