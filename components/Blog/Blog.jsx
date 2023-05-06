"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsBookmark, BsFillBookmarkFill, BsClockHistory } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { AiOutlineHeart,AiFillHeart } from "react-icons/ai";

const Blog = ({ image, alt, title, category, authorImage, author,readingTime,isLiked,likesCount,commentsCount,isBookmarked }) => {
  const [isBookmark, setIsBookmark] = useState(isBookmarked);
  return (
    <section className="rounded-3xl px-3 pt-3 overflow-hidden border shadow-sm col-span-12 mx-2 md:mx-0 md:col-span-6 lg:col-span-4 h-full flex flex-col">
      <div className="aspect-w-16 aspect-h-9 ">
        <Image
          className="w-full h-full object-center rounded-3xl object-cover"
          src={`/images/${image}`}
          fill
          alt={alt}
        />
      </div>
      <div className="flex flex-col bg-gray-100  mb-3 mt-10 rounded-3xl h-full  text-end px-3 pt-4 pb-4">
        <h2 className="font-bold text-xl">{title}</h2>
        <div className="mt-4 flex-1 flex flex-col justify-end">
          {/* author details */}
          <div className="flex justify-between mb-5">
            <div className="bg-blue-100 px-5 py-0 text-xs hover:bg-blue-600 hover:text-blue-100 cursor-pointer transition-all duration-200  text-blue-600 flex items-center rounded-full">
              {category.title}
            </div>
            <div className="flex items-center gap-2">
              <span className="opacity-75 text-sm">{author.name}</span>
              <Image
                className="object-cover w-8 h-8  rounded-full ring-2 ring-white"
                src={authorImage}
                alt={author.name}
              />
            </div>
          </div>
          {/* footer details */}
          <div className="flex justify-between items-center">
            <p className="flex gap-2">
              <span dir="rtl" className="text-xs text-gray-500">
                <span>{readingTime}</span>
                دقیقه
              </span>
              <BsClockHistory className="text-gray-500" />
            </p>
            <div className="flex gap-3">
              <button
                // onClick={() => setIsBookmark(!isBookmark)}
                className="bg-slate-300 p-1 rounded-md text-blue-500"
              >
                {isBookmark ? <BsFillBookmarkFill /> : <BsBookmark />}
              </button>
              <div className="flex items-center gap-1 bg-slate-300 p-1 rounded-md text-gray-500">
                <span className="text-xs font-semibold">{commentsCount}</span>
                <BiMessageDetail />
              </div>
              <button className="flex items-center gap-1 bg-slate-300 p-1 rounded-md text-red-500">
                <span className="text-xs font-semibold">{likesCount}</span>
                {isLiked? <AiFillHeart/>:<AiOutlineHeart />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
