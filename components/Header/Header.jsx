"use client";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import { MdStorefront } from "react-icons/md";
import { VscMenu } from "react-icons/vsc";
import Link from "next/link";
import Menu from "./Menu/Menu";
import { useState } from "react";
import { useAuth } from "@/Context/AuthContext";

const Header = () => {
  const [show, setShow] = useState(false);
  const user = useAuth();
  const handleChangeShow = () => {
    const willShow = !show ? "hidden" : "auto";
    document.body.style.overflow = willShow;
    setShow(!show);
  };
  return (
    <header className="px-3 md:px-7 relative">
      <div className="flex max-w-screen-2xl font-semibold  mx-auto px-5 justify-between py-5 border mt-4 rounded-md shadow-md">
        <div className="flex items-center gap-5">
          <div>
            <Link className="flex gap-1" href="/signin-signup">
              <span>عضویت</span>
              /
              <span>ورود</span>
            </Link>
            {/*   <RxAvatar className="text-slate-600" size={27} /> */}
          </div>
          <div>
            <AiOutlineShoppingCart className="text-purple-700" size={27} />
          </div>
          <div>
            <BsSun className="text-blue-600" size={25} />
          </div>
        </div>
        <div className="gap-8 hidden items-center md:flex">
          <ul className="flex gap-4">
            <li>
              <Link href="/about-us">درباره ما</Link>
            </li>
            <li>
              <Link href="/blogs">بلاگ ها</Link>
            </li>
            <li>
              <Link href="/courses">دوره های آموزشی</Link>
            </li>
            <li>
              <Link href="/">خانه</Link>
            </li>
          </ul>
          <div>
            <MdStorefront className="text-green-600" size={30} />
          </div>
        </div>
        <div className="md:hidden ">
          <button onClick={() => handleChangeShow()}>
            <VscMenu size={30} />
          </button>
          <Menu show={show} handleShow={() => handleChangeShow()} />
          <div
            onClick={() => handleChangeShow()}
            className={`${
              show ? "block opacity-40" : "hidden"
            } fixed inset-0 w-screen h-screen z-10 bg-black`}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
