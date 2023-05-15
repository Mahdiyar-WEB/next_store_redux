import BlogList from '@/components/BlogList/BlogList';
import React from 'react'

const RelatedPosts = ({relatedPosts}) => {
  return (
    <section className='container max-w-screen-lg mx-auto mb-10 px-3 md:px-0'>
        <h2 className='text-3xl font-semibold text-end mb-10'>پست های مشابه</h2>
        <section
        dir="rtl"
        className="md:col-span-9  order-3 md:order-3 grid col-span-12 grid-cols-12 gap-y-8 md:gap-x-8"
      >
        <BlogList relatedPosts={true} blogs={relatedPosts}/>
      </section>
    </section>
  )
}

export default RelatedPosts;