import { RightArrow } from '@/shared/ui/index'
import { IMAGES } from '@/shared/config'
import Link from 'next/link'
import Image from 'next/image'

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
          <div className="p-3 max-w-[200px] w-full bg-primary rounded-[20px] flex flex-col gap-4 relative">
            {/* Верхняя часть: метка "Реклама" и кнопка */}
            <div className="flex items-start justify-between">
              <span className="text-white opacity-50 font-medium text-xs">Реклама</span>
              <button className="w-8 h-8 bg-white hover:bg-accent-tertiary transition-all duration-300 rounded-full flex items-center justify-center">
                <RightArrow />
              </button>
            </div>
            
            {/* Заголовок */}
            <h4 className="text-white text-sm font-semibold">
              Комплексное благоустройство <br /> территорий
            </h4>
            
            {/* Изображение */}
            <div className="rounded-[10px] overflow-hidden mt-2">
              <Image
                src={IMAGES.hero.advertisement}
                alt="Advertisement"
                width={200}
                height={295}
              />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}