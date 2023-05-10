import BlogLayout from "@/components/BlogLayout/BlogLayout";
import BlogList from "@/components/BlogList/BlogList";

const fetchBlogs = async (page) => {
  const response = await fetch(
    `http://localhost:5000/api/posts?page=${page}&limit=3`,
    { cache: "no-store" }
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
      page:currentPage
    },
  } = await fetchBlogs(page);
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
