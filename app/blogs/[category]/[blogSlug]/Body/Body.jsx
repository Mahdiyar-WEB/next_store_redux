import Image from "next/image";
import React from "react";

const Body = ({ title, image }) => {
  return (
    <article className="px-3 prose-img:rounded-3xl sm:px-0 overflow-hidden container mx-auto text-end max-w-screen-lg prose prose-slate prose-h1:font-black prose-h1:text-3xl prose-h2:font-extrabold prose-h2:text-2xl prose-p:text-base prose-p:leading-8 md:prose-p:leading-10 md:prose-p:text-lg">
      <h1>{title}</h1>
      <h2>عنوان تستی اول</h2>
      <p>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
        رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </p>
      <div className="aspect-w-16 aspect-h-9">
        <Image
          className="w-full h-full object-center object-cover border"
          src={`/images/${image}`}
          fill
          alt={title}
        />
      </div>
      <h2>عنوان تستی دوم</h2>
      <p>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
        رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </p>
      <pre className="text-start">
        {`
            module.exports = {
                content: [
                  './pages/**/*.{js,ts,jsx,tsx,mdx}',
                  './components/**/*.{js,ts,jsx,tsx,mdx}',
                  './app/**/*.{js,ts,jsx,tsx,mdx}',
                ],
                theme: {
                },
                plugins: [
                  require('@tailwindcss/aspect-ratio'),
                  require('@tailwindcss/typography'),
                ],
              }
        `}
      </pre>
    </article>
  );
};

export default Body;
