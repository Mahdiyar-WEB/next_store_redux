import {HiOutlineAdjustments} from "react-icons/hi";
import {HiSortDescending} from "react-icons/hi"

const BlogFilterSortMobile = () => {
  return (
    <div className="flex md:hidden gap-2 w-full px-2 mb-8">
      <button className="flex border border-gray-600 justify-center py-1 rounded-xl px-3 flex-grow text-gray-500 items-center gap-2">
        مرتب سازی
        <HiSortDescending size={19}/>
      </button>
      <button className="flex border border-gray-600 justify-center py-1 rounded-xl px-3 flex-grow text-gray-500 items-center gap-2" >
        فیلتر
        <HiOutlineAdjustments/>
      </button>
    </div>
  );
};

export default BlogFilterSortMobile;
