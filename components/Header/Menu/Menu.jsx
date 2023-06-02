import React from "react";
import { MdStorefront } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { useAuth } from "@/Context/AuthContext";

const Menu = ({ show, handleShow }) => {
  const { user } = useAuth();
  return (
    <div
      className={`transition-all ease-linear font-semibold duration-300 z-20 px-5 py-8 fixed h-screen bg-white border-l shadow-md top-0 right-0 w-4/6 md:hidden  ${
        show ? "translate-x-0 block" : "translate-x-96"
      }`}
    >
      <div className="flex justify-between">
        <div>
          <MdStorefront size={24} />
        </div>
        <button onClick={handleShow}>
          <IoMdClose size={24} />
        </button>
      </div>
      <ul className="flex flex-col text-end gap-3 mt-10">
        <li onClick={handleShow}>
          <Link className="w-100 block" href="/">
            خانه
          </Link>
        </li>
        <hr />
        <li onClick={handleShow}>
          <Link className="w-100 block" href="/about-us">
            درباره ما
          </Link>
        </li>
        <hr />
        <li onClick={handleShow}>
          <Link className="w-100 block" href="/blogs">
            بلاگ ها
          </Link>
        </li>
        <hr />
        <li onClick={handleShow}>
          <Link className="w-100 block" href="/courses">
            دوره های آموزشی
          </Link>
        </li>
        <hr />
        {!user && (
          <li>
            <Link
              className="flex gap-1 w-100 justify-end"
              href="/signin-signup"
            >
              <span>عضویت</span>/<span>ورود</span>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Menu;
