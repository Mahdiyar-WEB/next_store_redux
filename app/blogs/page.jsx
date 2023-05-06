"use client";
import React, { useState } from "react";
import Blog from "@/components/Blog/Blog";
import reactImage from "@/public/images/react.png";
import vueImage from "@/public/images/vue.png";
import nextImage from "@/public/images/next.jpg";
import mahdiyarImage from "@/public/images/mahdiyar.jpeg";
import BlogTabs from "@/components/BlogTabs/BlogTabs";
import BlogFilterSort from "@/components/BlogFilterSort/BlogFilterSort";

const Blogs = () => {
  const [showCategory, setShowCategory] = useState(false);
  return (
    <main className="md:px-7 pt-20">
      <div className="max-w-screen-2xl mx-auto grid md:gap-10 grid-cols-12 md:grid-rows-[70px_minmax(300px,_1fr)]">
        <BlogFilterSort/>
        <BlogTabs showCategory={showCategory} handleShowCategory={()=> setShowCategory(!showCategory)}/>
        <article className="md:col-span-9  order-3 md:order-3 grid col-span-12 grid-cols-12 gap-y-8 md:gap-x-8">
          <Blog authorImage={mahdiyarImage} authorName="مهدیار" category="ریکت" title="مزیت های استفاده از ریداکس در ریکت" alt="react" image={reactImage} />
          <Blog authorImage={mahdiyarImage} authorName="مهدیار" category="ویو" title="ویو چیست؟" alt="vue" image={vueImage} />
          <Blog authorImage={mahdiyarImage} authorName="مهدیار" category="نکست" title="نکست چیست؟" alt="next" image={nextImage} />
        </article>
      </div>
    </main>
  );
};

export default Blogs;
