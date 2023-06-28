"use client";
import Signin_Signup_Image from "@/public/images/signin_signup.png";
import Image from "next/image";
import { HiOutlineLogin } from "react-icons/hi";
import { BsPersonFillAdd } from "react-icons/bs";
import { useState } from "react";
import Signin from "./Signin/Signin";
import Signup from "./Signup/Signup";

const Signin_Signup = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="pt-20 md:px-7 container  max-w-screen-sm lg:max-w-screen-lg mx-auto">
      <div className="rounded-lg shadow-lg border  flex mx-4">
        <div className="lg:w-2/5 shadow-md pt-20 pb-20 hidden  lg:block">
          <Image
            className="w-full"
            alt="signin-signup"
            src={Signin_Signup_Image}
          />
          <h1 className="text-2xl font-medium text-center">خوش آمدید</h1>
        </div>
        <div className=" border-gray-200 dark:border-gray-700 flex flex-col items-center w-full lg:w-3/5 pt-4">
          <ul className="flex -mb-px text-md font-medium text-center text-gray-500 dark:text-gray-400">
            <li className="mr-2">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex items-center gap-1 p-4 border-b-2 border-transparent rounded-t-lg ${
                  isLogin
                    ? "text-blue-600  border-blue-600 dark:text-blue-500 dark:border-blue-500"
                    : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                } group`}
              >
                <HiOutlineLogin size={19} />
                ورود
              </button>
            </li>
            <li className="mr-2">
              <button
                onClick={() => setIsLogin(false)}
                className={`flex items-center gap-1 p-4 rounded-t-lg border-b-2 border-transparent active group ${
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
          {isLogin && <Signin />}
          {!isLogin && <Signup />}
        </div>
      </div>
    </main>
  );
};

export default Signin_Signup;
