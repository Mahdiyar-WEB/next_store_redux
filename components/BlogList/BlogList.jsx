"use client";

import { useState } from "react";
import Blog from "./Blog/Blog";
import mahdiyarImage from "@/public/images/mahdiyar.jpeg";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const BlogList = ({
  blogs,
  totalPages,
  hasNextPage,
  hasPrevPage,
  nextPage,
  prevPage,
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
          />
        );
      })}
      {totalPages > 1 && (
        <div className="flex  justify-center col-span-12 gap-3">
          <button
            className={`border  px-2 py-1 rounded-md transition-all duration-300 ${
              hasNextPage
                ? "bg-blue-500 text-white border-blue-500"
                : "border-gray-300 text-gray-300"
            }`}
            disabled={!hasNextPage}
            onClick={() => handleAddQuery("next", nextPage)}
          >
            بعدی
          </button>
          <button
            className={`border  px-2 py-1 rounded-md transition-all duration-300 ${
              hasPrevPage
                ? "bg-blue-500 text-white border-blue-500"
                : "border-gray-300 text-gray-300"
            }`}
            disabled={!hasPrevPage}
            onClick={() => handleAddQuery("prev", prevPage)}
          >
            قبلی
          </button>
        </div>
      )}
    </>
  );
};

export default BlogList;
