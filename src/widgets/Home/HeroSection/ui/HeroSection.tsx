import { IMAGES } from '@/shared/config'
import Link from 'next/link'
import { AdsBanner } from '@/shared/ui/AdsBanner'
import Image from 'next/image'

export const HeroSection = () => {
  return (
    <div
      className="relative rounded-[40px] overflow-hidden"
    >
      <Image
        src={IMAGES.hero.background}
        alt="Hero background"
        fill
        className="object-cover object-center"
      />
      {/* Общий контейнер */}
      <div className="relative z-10 flex py-20 justify-between px-10 mt-20">
        {/* Контент + CTA */}
        <div className="w-full flex items-end justify-center lg:justify-start max-w-full">
          <div className="h-full flex flex-col gap-6 justify-center items-center md:items-start md:justify-start">
            <h1 className="text-white text-center md:text-left text-2xl md:text-4xl lg:text-5xl font-semibold lg:font-bold leading-tight">
              <span className="whitespace-nowrap">Найди подрядчика</span>
              <br />
              <span className="whitespace-nowrap">для благоустройства</span>
            </h1>
            {/* Кнопка */}
            <div className='flex-1 flex items-start mb-20 md:mb-0 lg:items-end'>
              <Link href="/" className="bg-white hover:bg-accent-tertiary transition-all duration-300 text-secondary font-semibold text-base px-10 py-3 rounded-[50px]">
                Смотреть всех
              </Link>
            </div>


          </div>
        </div>
        {/* Рекламный блок */}
        <div className="hidden md:flex items-center justify-end md:basis-1/3 lg:basis-1/4">
          <AdsBanner hasDescription={false} />
        </div>
      </div>
    </div>
  )
}
