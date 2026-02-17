'use client'

import { useState } from 'react'
import { AdsBanner } from '@/shared/ui'
import Link from 'next/link'
import Image from 'next/image'

export const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div
      className="relative rounded-[40px] overflow-hidden"
    >
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-500 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        aria-hidden="true"
      >
        <div className="h-full w-full animate-pulse bg-linear-to-r from-[#2f2f2f] via-[#3a3a3a] to-[#2f2f2f]" />
      </div>
      <Image
        src="https://s3.twcstorage.ru/4b615622-soup/hero/background.webp"
        alt="Hero background"
        fill
        className="object-cover object-center"
        priority
        fetchPriority="high"
        sizes="(min-width: 1024px) 1200px, (min-width: 768px) 900px, 100vw"
        onLoad={() => setIsLoaded(true)}
      />
      {/* Общий контейнер */}
      <div className="relative z-10 flex py-20 justify-between px-10 mt-20">
        {/* Контент + CTA */}
        <div className="w-full flex items-end justify-center lg:justify-start max-w-full">
          <div className="h-full flex flex-col gap-6 justify-center items-center md:items-start md:justify-start">
            <h1 className="text-white text-center md:text-left text-3xl md:text-4xl lg:text-5xl font-semibold lg:font-bold leading-tight">
              <span className="whitespace-nowrap">Найди подрядчика</span>
              <br />
              <span className="whitespace-nowrap">для благоустройства</span>
            </h1>
            {/* Кнопка */}
            <div className='flex-1 flex items-start mb-20 md:mb-0 lg:items-end'>
              <Link href="/catalog" className="bg-white hover:bg-primary transition-all duration-300 text-secondary font-semibold text-base px-10 py-3 rounded-[50px]">
                Смотреть всех
              </Link>
            </div>


          </div>
        </div>
        {/* Рекламный блок */}
        <div className="hidden md:flex items-center justify-end md:basis-1/3 lg:basis-1/4">
          <div className="w-[220px] shrink-0">
            <AdsBanner hasDescription={false} variant="hero" />
          </div>
        </div>
      </div>
    </div>
  )
}
