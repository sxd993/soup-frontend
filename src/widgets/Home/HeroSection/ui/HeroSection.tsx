import { IMAGES } from '@/shared/config'
import Link from 'next/link'
import { AdsBanner } from '@/widgets/AdsBanner/AdsBanner'

export const HeroSection = () => {
  return (
    <div
      className="rounded-[40px] bg-cover bg-center overflow-hidden -mt-[90px]"
      style={{
        backgroundImage: `url('${IMAGES.hero.background}')`,
      }}
    >
      {/* Общий контейнер */}
      <div className="flex py-[7%] justify-between px-12 mt-20">
        {/* Левая часть */}
        <div className="flex-1 flex items-center justify-center max-w-full">
          <div className="flex flex-col gap-10 justify-center items-center sm:items-start sm:justify-start">
            <h1 className="text-white text-center sm:text-left text-2xl md:text-3xl lg:text-5xl font-semibold lg:font-bold leading-tight">
              <span className="whitespace-nowrap">Найди подрядчика</span>
              <br />
              <span className="whitespace-nowrap">для благоустройства</span>
            </h1>
            {/* Кнопка */}
            <Link href="/" className="bg-white hover:bg-accent-tertiary transition-all duration-300 text-secondary font-semibold text-base px-10 py-3 rounded-[50px]">
              Смотреть всех
            </Link>
          </div>
        </div>
        {/* Правая часть */}
        <div className="hidden sm:flex flex-1 items-center justify-end">
          <AdsBanner />
        </div>
      </div>
    </div>
  )
}