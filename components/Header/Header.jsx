"use client";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import { MdStorefront } from "react-icons/md";
import { VscMenu } from "react-icons/vsc";
import Link from "next/link";
import Menu from "./Menu/Menu";
import { useRef, useState } from "react";
import { useAuth, useAuthActions } from "@/Context/AuthContext";
import { BsPersonCircle } from "react-icons/bs";
import { ref } from "yup";

const Header = () => {
  const [show, setShow] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { user,loading } = useAuth();
  const dispatch = useAuthActions();
  const profileMenuRef = useRef();

  const handleChangeShow = () => {
    const willShow = !show ? "hidden" : "auto";
    document.body.style.overflow = willShow;
    setShow(!show);
  };

  return (
    <header className="px-3 md:px-7 relative">
      <div className={`flex max-w-screen-2xl font-semibold  mx-auto px-5 justify-between py-5 border mt-4 rounded-md shadow-md transition-all duration-100 ${loading ? "opacity-0":"opacity-100"}`}>
        <div className="flex items-center gap-5">
          <div>
            {!user ? (
              <Link className="flex gap-1" href="/signin-signup">
                <span>عضویت</span>/<span>ورود</span>
              </Link>
            ) : (
              <div className="relative">
                <button
                  className={`flex gap-1 text-gray-500 rounded-full ${
                    showProfileMenu && "ring-2 ring-violet-500-700"
                  }`}
                  ref={profileMenuRef}
                  onClick={() => {
                    setShowProfileMenu(!showProfileMenu);
                    profileMenuRef.current.focus();
                  }}
                  onBlur={()=>setShowProfileMenu(!showProfileMenu)}
                >
                  <BsPersonCircle size={25} />
                </button>
                <div
                  class={`absolute left-0 right-0 transition ease-out duration-100 z-10 mt-5 w-48  rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none
                  ${
                    showProfileMenu
                      ? "transform opacity-100 scale-100"
                      : "transform opacity-0 scale-95"
                  }`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabindex="-1"
                >
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-0"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-1"
                  >
                    Settings
                  </a>
                  <button
                    onClick={() => {
                      dispatch({ type: "SIGNOUT" });
                    }}
                    class="block px-4 py-2 text-sm text-gray-700"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            )}
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
