const CategoryDetails = ({ showCategory }) => {
  return (
    <div
      className={`bg-white flex flex-col border shadow py-4 rounded-b-lg transition ease-linear  ${
        showCategory ? "opacity-1 delay-100 duration-300" : "opacity-0"
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
  );
};

export default CategoryDetails;
