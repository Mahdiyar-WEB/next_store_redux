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
    },
  } = await fetchBlogs(page);
  return (
    <article className="md:col-span-9  order-3 md:order-3 grid col-span-12 grid-cols-12 gap-y-8 md:gap-x-8">
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

export default Blogs;
