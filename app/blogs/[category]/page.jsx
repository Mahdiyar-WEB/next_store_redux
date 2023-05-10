import BlogLayout from "@/components/BlogLayout/BlogLayout";
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
    <BlogLayout>
        <BlogList
          blogs={blogs}
          totalPages={totalPages}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
          nextPage={nextPage}
          prevPage={prevPage}
        />
    </BlogLayout>
  );
};

export default CategoryBlogs;
