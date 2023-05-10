"use client";

import Blog from "./Blog/Blog";
import mahdiyarImage from "@/public/images/mahdiyar.jpeg";
import toPersianDigits from "@/utils/toPersianDigits";
import { usePathname, useRouter } from "next/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const BlogList = ({
  blogs,
  totalPages,
  hasNextPage,
  hasPrevPage,
  nextPage,
  prevPage,
  currentPage,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleAddQuery = (action, value) => {
    switch (action) {
      case "next": {
        router.push(`${pathname}?page=${value}`);
      }
      case "prev": {
        value === 1
          ? router.push(pathname)
          : router.push(`${pathname}?page=${value}`);
      }
    }
  };
  return (
    <>
      {blogs.map((blog) => {
        return (
          <Blog
            key={blog.id}
            authorImage={mahdiyarImage}
            author={blog.author}
            isLiked={blog.isLiked}
            likesCount={blog.likesCount}
            commentsCount={blog.commentsCount}
            alt={blog.slug}
            title={blog.title}
            category={blog.category}
            image={blog.coverImage}
            readingTime={blog.readingTime}
            slug={blog.slug}
          />
        );
      })}
      {totalPages > 1 && (
        <div className="flex items-center justify-center col-span-12 gap-3">

          <button
            onClick={() => handleAddQuery("prev", prevPage)}
            className={`p-2 rounded-full border ${
              hasPrevPage
                ? "bg-gray-200 text-gray-400 hover:bg-gray-300 hover:text-gray-500"
                : "bg-gray-100 text-gray-300"
            }`}
            disabled={!hasPrevPage}
          >
            <IoIosArrowForward />
          </button>
          <span className="flex items-center align-middle justify-center border rounded-full h-9 w-9 bg-purple-500 text-white">
            {toPersianDigits(currentPage)}
          </span>
          <span className="flex items-center justify-center border rounded-full h-9 w-9">
            {toPersianDigits(currentPage + 1)}
          </span>
          <button
            onClick={() => handleAddQuery("next", nextPage)}
            className={`p-2 rounded-full border ${
              hasNextPage
                ? "bg-gray-200 text-gray-400 hover:bg-gray-300 hover:text-gray-500"
                : "bg-gray-100 text-gray-300"
            }`}
            disabled={!hasNextPage}
          >
            <IoIosArrowBack />
          </button>

        </div>
      )}
    </>
  );
};

export default BlogList;
