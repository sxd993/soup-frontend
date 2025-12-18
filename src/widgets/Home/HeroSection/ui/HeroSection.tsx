import { IMAGES } from '@/shared/config'
import Link from 'next/link'
import { AdsBanner } from '@/widgets/AdsBanner/AdsBanner'
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
      <div className="relative z-10 flex py-[5%] justify-between px-4 mt-20">
        {/* Контент + CTA */}
        <div className="flex-1 flex items-center justify-center lg:justify-center max-w-full">
          <div className="h-full flex flex-col gap-6 justify-center items-center sm:items-start sm:justify-start">
            <h1 className="text-white text-center sm:text-left text-2xl sm:text-4xl lg:text-5xl font-semibold lg:font-bold leading-tight">
              <span className="whitespace-nowrap">Найди подрядчика</span>
              <br />
              <span className="whitespace-nowrap">для благоустройства</span>
            </h1>
            {/* Кнопка */}
            <div className='flex-1 flex items-center lg:items-end'>
              <Link href="/" className="bg-white hover:bg-accent-tertiary transition-all duration-300 text-secondary font-semibold text-base px-10 py-3 rounded-[50px]">
                Смотреть всех
              </Link>
            </div>


          </div>
        </div>
        {/* Рекламный блок */}
        <div className="hidden sm:flex flex-1 items-center justify-end">
          <AdsBanner />
        </div>
      </div>
    </div>
  )
}
