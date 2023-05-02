"use client";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { BsSun } from "react-icons/bs";
import { MdStorefront } from "react-icons/md";
import { VscMenu } from "react-icons/vsc";
import Link from "next/link";
import Menu from "./Menu/Menu";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <header className="px-3 md:px-7">
      <div className="flex max-w-screen-2xl relative mx-auto px-5 justify-between py-5 border mt-4 rounded-md shadow-md">
        <div className="flex gap-5">
          <div>
            <RxAvatar className="text-slate-600" size={27} />
          </div>
          <div>
            <AiOutlineShoppingCart className="text-purple-700" size={27} />
          </div>
          <div>
            <BsSun className="text-blue-600" size={25} />
          </div>
        </div>
        <div className="gap-8 hidden md:flex">
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
          <button onClick={() => setShow(!show)}>
            <VscMenu size={30} />
          </button>
          <Menu show={show} handleShow={() => setShow(!show)} />
        </div>
      </div>
    </header>
  );
};

export default Header;
