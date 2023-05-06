import BlogTabs from "@/components/BlogTabs/BlogTabs";
import BlogFilterSort from "@/components/BlogFilterSort/BlogFilterSort";
const fetchPostTabs = async () => {
  const response = await fetch("http://localhost:5000/api/post-category", {
    cache: "no-store",
  });
  return response.json();
};

export default async function RootLayout({ children }) {
  const blogTabs = await fetchPostTabs();
  return (
    <main className="md:px-7 pt-20">
      <div className="max-w-screen-2xl mx-auto grid md:gap-10 grid-cols-12 md:grid-rows-[70px_minmax(300px,_1fr)]">
        <BlogFilterSort />
        <BlogTabs blogTabs={blogTabs.data} />
        {children}
      </div>
    </main>
  );
}
