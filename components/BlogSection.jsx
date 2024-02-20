import React from 'react'

const BlogSection = () => {
    return (
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-40" id='blog'>
        <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Customer stories</h2>
          <p class="mt-1 text-gray-600 dark:text-gray-400">See how game-changing companies are making the most of every engagement with Preline.</p>
        </div>
      
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a class="group hover:bg-gray-100 rounded-3xl shadow-2xl p-5 transition-all dark:hover:bg-white/[.05]" href="#">
            <div class="aspect-w-16 aspect-h-10">
              <img class="w-full object-cover rounded-xl" src="/1.gif" alt="Image Description" />
            </div>
            <h3 class="mt-5 text-xl text-gray-800 dark:text-gray-300 dark:hover:text-white">
            Bab1. Konsep Dasar Sistem
            </h3>
            <p class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-gray-200">
              Learn more
              <svg class="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </p>
          </a>
      
          <a class="group hover:bg-gray-100 rounded-3xl shadow-2xl p-5 transition-all dark:hover:bg-white/[.05]" href="#">
            <div class="aspect-w-16 aspect-h-10">
              <img class="w-full object-cover rounded-xl" src="/3.gif" alt="Image Description" />
            </div>
            <h3 class="mt-5 text-xl text-gray-800 dark:text-gray-300 dark:hover:text-white">
              Bab2. Pengembangan Sistem
            </h3>
            <p class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-gray-200">
              Learn more
              <svg class="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </p>
          </a>
      
          <a class="group hover:bg-gray-100 rounded-3xl shadow-2xl p-5 transition-all dark:hover:bg-white/[.05]" href="#">
            <div class="aspect-w-16 aspect-h-10">
              <img class="w-full object-cover rounded-xl" src="/2.gif" alt="Image Description" />
            </div>
            <h3 class="mt-5 text-xl text-gray-800 dark:text-gray-300 dark:hover:text-white">
              Bab3. Kebijakan & Perencanaan Sistem
            </h3>
            <p class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-gray-200">
              Learn more
              <svg class="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </p>
          </a>
        </div>
        <div className='items-center justify-center pt-20 text-center'>
          <a className='text-blue-400 hover:text-blue-600' href="/blog">See more</a>
        </div>
      </div>
  )
}

export default BlogSection
