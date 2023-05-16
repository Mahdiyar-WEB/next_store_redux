import toPersianDigits from '@/utils/toPersianDigits'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsBookmark, BsFillBookmarkFill, BsLink45Deg } from 'react-icons/bs'
import mahdiyarImage from "@/public/images/mahdiyar.jpeg";
import toLocalDate from '@/utils/toLocalDate'


const Header = ({isBookmarked,englishTitle,title,readingTime,name,biography,time}) => {
  return (
    <header className="container max-w-screen-lg mx-auto mb-10 px-3 md:px-0">
    {/* header */}
    <div className="sm:justify-between sm:flex-row flex flex-col-reverse gap-6 sm:gap-3">
      {/* actions */}
      <div className="flex gap-3 h-fit  justify-end  sm:justify-start ">
        <button className="flex text-sm px-3 rounded-3xl py-1 items-center gap-2 border border-gray-400 text-gray-500">
          {isBookmarked ? <BsFillBookmarkFill /> : <BsBookmark />}
          {isBookmarked ? "دخیره شده" : "ذخیره"}
        </button>
        <button className="text-gray-500">
          <BsLink45Deg size={28} />
        </button>
      </div>
      {/* user details */}
      <div className="flex justify-end  gap-4 ">
        <div className="flex flex-col gap-2">
          <div className="flex items-baseline justify-end gap-3">
            <Link
              href={`/blogs/${englishTitle}`}
              className="border px-3 font-medium py-1 rounded-3xl text-xs text-purple-500 border-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300 cursor-pointer"
            >
              {title}
            </Link>
            <h3 className="font-bold">{name}</h3>
          </div>
          <small className="inline-block text-end">{biography}</small>
          <p className="flex gap-1 text-sm font-medium text-gray-600 text-end">
            <span>خواندن {toPersianDigits(readingTime)} دقیقه</span>
            <span>&bull;</span>
            <span>{toLocalDate(time)}</span>
          </p>
        </div>
        <div className="rounded-full overflow-hidden w-24 h-24">
          <Image src={mahdiyarImage} alt="mahdiyar" />
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header