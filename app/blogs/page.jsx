import BlogLayout from "@/components/BlogLayout/BlogLayout";
import BlogList from "@/components/BlogList/BlogList";
import { cookies } from "next/headers";

const fetchBlogs = async (page) => {
  const nextCookies = cookies();

  const response = await fetch(
    `http://localhost:5000/api/posts?page=${page}&limit=3`,
    {
      cache: "no-store",
      credentials: "include",
      headers: {
        Cookie: nextCookies.get("userToken")?.value
          ? `userToken=${nextCookies.get("userToken")?.value}`
          : "",
      },
    }
  );
  return response.json();
};

const Blogs = async ({ searchParams: { page = 1 } }) => {
  const {
    data: {
      docs: blogs,
      totalPages,
      hasPrevPage,
      hasNextPage,
      nextPage,
      prevPage,
      page: currentPage,
    },
  } = await fetchBlogs(page);
  console.log("🚀 ~ file: page.jsx:32 ~ Blogs ~ blogs:", blogs);
  return (
    <BlogLayout>
      <BlogList
        blogs={blogs}
        totalPages={totalPages}
        hasPrevPage={hasPrevPage}
        hasNextPage={hasNextPage}
        nextPage={nextPage}
        prevPage={prevPage}
        currentPage={currentPage}
      />
    </BlogLayout>
  );
};

export default Blogs;
