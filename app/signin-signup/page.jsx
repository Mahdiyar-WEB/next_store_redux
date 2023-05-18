"use client";
import Signin_Signup_Image from "@/public/images/signin_signup.png";
import Image from "next/image";
import { HiOutlineLogin } from "react-icons/hi";
import { BsPersonFillAdd } from "react-icons/bs";
import { useState } from "react";

const Signin_Signup = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <main className="pt-20 md:px-7">
      <div className="rounded-lg shadow-lg border container max-w-screen-lg mx-auto flex">
        <div className="w-2/5 shadow-md pt-14 pb-20">
          <Image
            className="w-full"
            alt="signin-signup"
            src={Signin_Signup_Image}
          />
          <h1 className="text-2xl font-medium text-center">خوش آمدید</h1>
        </div>
        <div class=" border-gray-200 dark:border-gray-700 flex flex-col items-center w-3/5 pt-4">
          <ul class="flex -mb-px text-md font-medium text-center text-gray-500 dark:text-gray-400">
            <li class="mr-2">
              <button
                onClick={() => setIsLogin(true)}
                class={`flex items-center gap-1 p-4 border-b-2 border-transparent rounded-t-lg ${
                  isLogin
                    ? "text-blue-600  border-blue-600 dark:text-blue-500 dark:border-blue-500"
                    : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                } group`}
              >
                <HiOutlineLogin size={19} />
                ورود
              </button>
            </li>
            <li class="mr-2">
              <button
                onClick={() => setIsLogin(false)}
                class={`flex items-center gap-1 p-4 rounded-t-lg border-b-2 border-transparent active group ${
                  !isLogin
                    ? "text-blue-600  border-blue-600 dark:text-blue-500 dark:border-blue-500"
                    : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }`}
              >
                <BsPersonFillAdd size={20} />
                عضویت
              </button>
            </li>
          </ul>
          {/* login */}
          {isLogin && (
            <form
              dir="rtl"
              className="w-full gap-4 px-10 flex flex-col justify-center h-full"
            >
              <div className="flex flex-col gap-2 ">
                <span className="text-sm font-medium">نام کاربری</span>
                <input
                  className="border border-gray-300 rounded-md py-2 px-3 outline-blue-400 w-full"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <span className="text-sm font-medium">رمز عبور</span>
                <input
                  className="border border-gray-300 rounded-md py-2 px-3 outline-blue-400 w-full"
                  type="password"
                />
              </div>
              <button
                className="bg-blue-500 rounded-lg px-6 py-2 w-fit text-white"
                type="submit"
              >
                ورود
              </button>
            </form>
          )}
          {!isLogin && (
            <form
              dir="rtl"
              className="w-full gap-4 px-10 flex flex-col justify-center h-full"
            >
              <div className="flex flex-col gap-2 ">
                <span className="text-sm font-medium">نام کاربری</span>
                <input
                  className="border border-gray-300 rounded-md py-2 px-3 outline-blue-400 w-full"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <span className="text-sm font-medium">شماره موبایل</span>
                <input
                  className="border border-gray-300 rounded-md py-2 px-3 outline-blue-400 w-full"
                  type="tel"
                  placeholder="*******0915"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <span className="text-sm font-medium">ایمیل</span>
                <input
                  className="border border-gray-300 rounded-md py-2 px-3 outline-blue-400 w-full"
                  type="email"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <span className="text-sm font-medium">رمز عبور</span>
                <input
                  className="border border-gray-300 rounded-md py-2 px-3 outline-blue-400 w-full"
                  type="password"
                />
              </div>
              <button
                className="bg-blue-500 rounded-lg px-6 py-2 w-fit text-white"
                type="submit"
              >
                ثبت نام
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
};

export default Signin_Signup;
