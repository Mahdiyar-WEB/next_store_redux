import BlogList from "@/components/BlogList/BlogList";
// import { useState } from "react";

const fetchBlogs = async (page, category) => {
  const response = await fetch(
    `http://localhost:5000/api/posts?page=${page}&limit=3&categorySlug=${category}`,
    { cache: "no-store" }
  );
  return response.json();
};

const CategoryBlogs = async ({
  params: { category },
  searchParams: { page = 1 },
}) => {
  const {
    data: {
      docs: blogs,
      totalPages,
      hasPrevPage,
      hasNextPage,
      nextPage,
      prevPage,
    },
  } = await fetchBlogs(page, category);
  return (
    <article
      dir="rtl"
      className="md:col-span-9  order-3 md:order-3 grid col-span-12 grid-cols-12 gap-y-8 md:gap-x-8"
    >
      <BlogList
        blogs={blogs}
        totalPages={totalPages}
        hasPrevPage={hasPrevPage}
        hasNextPage={hasNextPage}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </article>
  );
};

export default CategoryBlogs;
