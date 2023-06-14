import BlogFilterSort from "@/components/BlogFilterSort/BlogFilterSort";
import BlogTabs from "@/components/BlogTabs/BlogTabs";
const fetchPostTabs = async () => {
  const response = await fetch("http://localhost:5000/api/post-category", {
    cache: "no-store",
  });
  return response.json();
};
const BlogLayout = async ({ children,searchParams }) => {
  const blogTabs = await fetchPostTabs();
  return (
    <div className="max-w-screen-2xl mx-auto grid md:gap-10 grid-cols-12 md:grid-rows-[70px_minmax(300px,_1fr)]">
      <BlogFilterSort searchParams={searchParams} />
      <BlogTabs blogTabs={blogTabs.data} />
      <article
        dir="rtl"
        className="md:col-span-9  order-3 md:order-3 grid col-span-12 grid-cols-12 gap-y-8 md:gap-x-8"
      >
        {children}
      </article>
    </div>
  );
};

export default BlogLayout;
