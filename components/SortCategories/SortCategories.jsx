const SortCategories = () => {
  return (
     <div className="flex gap-4 items-stretch h-full">
      <button className="hover:text-blue-500 text-gray-600 focus:text-purple-600 font-medium focus:relative">جدید ترین</button>
      <button className="hover:text-blue-500 text-gray-600 focus:text-purple-600 font-medium focus:relative">پربازدید ترین</button>
      <button className="hover:text-blue-500 text-gray-600 focus:text-purple-600 font-medium focus:relative">محبوب ترین</button>
      <div className="absolute w-4 left-0 bottom-5 h-1 bg-purple-600"></div>
    </div>
  );
};

export default SortCategories;
