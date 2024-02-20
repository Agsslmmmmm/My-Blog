import React from 'react'

const HeroSection = () => {
    return (
        <div class="relative overflow-hidden pt-24">
            <div class="relative z-10">
                <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                    <div class="max-w-2xl text-center mx-auto">
                        <div class="mt-5 max-w-2xl">
                            <h1 class="block font-semibold text-gray-600 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                                Hi👋, I'am <span className='text-blue-600'>Agus Salim</span>
                            </h1>
                        </div>

                        <div class="mt-5 max-w-3xl">
                            <p class="text-lg text-gray-600 dark:text-gray-400">
                            Welcome to My Blog! We're here to share valuable insights, inspiration, and practical tips with you. Each post is crafted to add value to your life and spark meaningful discussions. Thank you for joining us on this journey                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
