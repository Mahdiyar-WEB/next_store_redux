import BlogLayout from "@/components/BlogLayout/BlogLayout";
import BlogList from "@/components/BlogList/BlogList";
import { cookies } from "next/headers";

const fetchBlogs = async (page,sort) => {
  const nextCookies = cookies();

  const response = await fetch(
    `http://localhost:5000/api/posts?page=${page}&limit=3&sort=${sort}`,
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

const Blogs = async ({ searchParams: { page = 1 , sort="" } }) => {
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
  } = await fetchBlogs(page,sort);
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
