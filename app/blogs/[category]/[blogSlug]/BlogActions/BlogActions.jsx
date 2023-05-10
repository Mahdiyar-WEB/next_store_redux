"use client";
import {
  BsBookmark,
  BsFillBookmarkFill,
  BsTelegram,
  BsTwitter,
  BsLinkedin,
  BsCheck2,
  BsCheckLg,
} from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdContentCopy } from "react-icons/md";
import toPersianDigits from "@/utils/toPersianDigits";
import CopyToClipboard from "react-copy-to-clipboard";
import { useState } from "react";

const BlogActions = ({
  likesCount,
  commentsCount,
  isBookmarked,
  isLiked,
  englishTitle,
  slug,
  title,
}) => {
  const [copied, setCopied] = useState();
  const copyHandler = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };
  return (
    <footer className="container max-w-screen-lg mx-auto px-3 sm:px-0 border-b-2 border-slate-600 pb-4">
      {/* hashtags */}
      <ul className="flex gap-4 justify-end flex-wrap mb-8">
        <li className="border border-gray-200 bg-gray-200 whitespace-nowrap text-gray-500 transition-all cursor-pointer duration-200 hover:bg-gray-300 px-3 py-1 rounded-3xl">
          ریکت
        </li>
        <li className="border border-gray-200 bg-gray-200 whitespace-nowrap text-gray-500 transition-all cursor-pointer duration-200 hover:bg-gray-300 px-3 py-1 rounded-3xl">
          فرانت اند
        </li>
        <li className="border border-gray-200 bg-gray-200 whitespace-nowrap text-gray-500 transition-all cursor-pointer duration-200 hover:bg-gray-300 px-3 py-1 rounded-3xl">
          web-development
        </li>
        <li className="border border-gray-200 bg-gray-200 whitespace-nowrap text-gray-500 transition-all cursor-pointer duration-200 hover:bg-gray-300 px-3 py-1 rounded-3xl">
          design
        </li>
      </ul>
      {/* actions */}
      <div className="flex flex-col-reverse gap-y-6 sm:flex-row sm:gap-y-0 px-5 md:px-0 justify-between items-center">
        <div className="flex items-center gap-6">
          <CopyToClipboard
            onCopy={copyHandler}
            text={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/blogs/${englishTitle}/${slug}`}
          >
            <div
              className={`cursor-pointer transition-all whitespace-nowrap duration-200  flex px-5 gap-2 text-sm py-2 border  rounded-3xl ${copied?"bg-green-500 text-white":"hover:bg-gray-100 border-gray-400 text-gray-500"}`}
            >
              {copied ? <BsCheckLg size={19} /> : <MdContentCopy size={19} />}
              <span>{copied ? "کپی شد" : "کپی لینک"}</span>
            </div>
          </CopyToClipboard>
          <div className="flex gap-4 text-gray-400 ">
            <a
              className="hover:text-gray-600"
              href={`https://telegram.me/share/url?url=${process.env.NEXT_PUBLIC_DOMAIN_URL}/blogs/${englishTitle}/${slug}&text=${title}`}
            >
              <BsTelegram size={22} />
            </a>
            <a
              className="hover:text-gray-600"
              href={`https://twitter.com/share?text=${title}&url=${process.env.NEXT_PUBLIC_DOMAIN_URL}/blogs/${englishTitle}/${slug}`}
            >
              <BsTwitter size={22} />
            </a>
            <a
              className="hover:text-gray-600"
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${process.env.NEXT_PUBLIC_DOMAIN_URL}/blogs/${englishTitle}/${slug}`}
            >
              <BsLinkedin size={22} />
            </a>
          </div>
        </div>
        <div className="flex gap-6 justify-evenly w-full sm:justify-end">
          <button className="flex gap-1 items-center text-gray-500">
            {isBookmarked ? (
              <BsFillBookmarkFill size={20} />
            ) : (
              <BsBookmark size={20} />
            )}
          </button>
          <button className="flex gap-1 items-center">
            <span className="text-gray-500">{toPersianDigits(likesCount)}</span>
            {!isLiked ? (
              <AiFillHeart className="text-red-500" size={22} />
            ) : (
              <AiOutlineHeart className="text-red-500" size={22} />
            )}
          </button>
          <p className="flex gap-1 items-center text-gray-500">
            <span>{toPersianDigits(commentsCount)}</span>
            <BiMessageDetail size={22} />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default BlogActions;
