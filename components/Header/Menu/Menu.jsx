import React from "react";
import { MdStorefront } from "react-icons/md";
import {IoMdClose} from "react-icons/io"
import Link from "next/link";

const Menu = ({show,handleShow}) => {
  return (
    <div className={`transition-transform ease-linear duration-300 px-5 py-8 absolute h-screen bg-white border-l shadow-md top-0 right-0 w-4/6 md:hidden ${show?"translate-x-0 ":"translate-x-96 "}`}>
      <div className="flex justify-between">
        <div>
          <MdStorefront size={24} />
        </div>
        <button onClick={handleShow}>
           <IoMdClose size={24}/>
        </button>
      </div>
      <ul className="flex flex-col text-end gap-4 mt-10">
        <li onClick={handleShow}>
            <Link href="/about-us">درباره ما</Link>
        </li>
        <li onClick={handleShow}>
            <Link href="/blogs">بلاگ ها</Link>
        </li>
        <li onClick={handleShow}>
            <Link href="/courses">دوره های آموزشی</Link>
        </li>
        <li onClick={handleShow}>
            <Link href="/">خانه</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
