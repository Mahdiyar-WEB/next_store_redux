const SortCategories = () => {
  return (
    <div className="flex gap-4 items-baseline h-full">
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
  );
};

export default SortCategories;
