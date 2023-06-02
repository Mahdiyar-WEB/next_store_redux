import React from 'react'
import notFoundImg from "@/public/images/not-found.png"
import Image from 'next/image'
import Link from 'next/link'

const NotFound = () => {
  return (
    <main className='md:px-7  container h-[calc(100vh-90px)] max-w-screen-lg mx-auto mb-10 flex flex-col items-center justify-center'>
      <Image src={notFoundImg} alt='not found' className='animate-not_found_animation' />
      <h3 className='font-bold text-2xl'>صفحه مورد نظر شما یافت نشد</h3>
      <button className='mt-6  rounded-lg bg-purple-500 text-white'>
        <Link className='inline-block w-100 px-6 py-2' href="/">بازگشت به خانه</Link>
      </button>
    </main>
  )
}

export default NotFound