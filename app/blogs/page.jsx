'use client'
import Blog from "@/components/Blog/Blog";
import mahdiyarImage from "@/public/images/mahdiyar.jpeg";
import { useState } from "react";

const fetchBlogs = async (page) => {
  const response = await fetch(
    `http://localhost:5000/api/posts?page=${page}&limit=3`,
    { cache: "no-store" }
  );
  return response.json();
};

const Blogs = async () => {
  const [page,setPage]= useState(1);
  const {
    data: { docs: blogs, totalPages, hasPrevPage, hasNextPage },
  } = await fetchBlogs(page);
  return (
    <article className="md:col-span-9  order-3 md:order-3 grid col-span-12 grid-cols-12 gap-y-8 md:gap-x-8">
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
              hasNextPage ? "bg-blue-500 text-white border-blue-500" : "border-gray-300 text-gray-300"
            }`}
            disabled={!hasNextPage}
            onClick={()=> setPage(page+1)}
          >
            بعدی
          </button>
          <button
            className={`border  px-2 py-1 rounded-md transition-all duration-300 ${
              hasPrevPage ? "bg-blue-500 text-white border-blue-500" : "border-gray-300 text-gray-300"
            }`}
            disabled={!hasPrevPage}
            onClick={()=> setPage(prevPage=> prevPage-1)}
          >
            قبلی
          </button>
        </div>
      )}
    </article>
  );
};

export default Blogs;
