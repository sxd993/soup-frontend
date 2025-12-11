import { RightArrow } from '@/shared/ui/index'
import Link from 'next/link'
export const HeroSection = () => {
  return (
    <div
      className="rounded-[40px] bg-center overflow-hidden -mt-[90px]"
      style={{
        backgroundImage: "url('/main.jpg')",
      }}
    >
      {/* Общий контейнер */}
      <div className="flex py-[7%] px-12 mt-20">
        {/* Левая часть */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col gap-10 justify-start items-start">
            <h1 className="text-white text-4xl lg:text-5xl font-semibold lg:font-bold leading-tight">
              <span className="whitespace-nowrap">Найди подрядчика</span>
              <br />
              <span className="whitespace-nowrap">для благоустройства</span>
            </h1>
            {/* Кнопка */}
            <Link href="/" className="bg-white text-secondary font-semibold text-base px-10 py-3 rounded-[50px]">
              Смотреть всех
            </Link>
          </div>
        </div>
        {/* Правая часть */}
        <div className="flex-1 flex items-center justify-end">
          <div className="p-3 max-w-[200px] w-full bg-primary rounded-[20px] flex flex-col gap-4 relative">
            {/* Верхняя часть: метка "Реклама" и кнопка */}
            <div className="flex items-start justify-between">
              <span className="text-white opacity-50 font-medium text-xs">Реклама</span>
              <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <RightArrow />
              </button>
            </div>
            
            {/* Заголовок */}
            <h4 className="text-white text-sm font-semibold">
              Комплексное благоустройство <br /> территорий
            </h4>
            
            {/* Изображение */}
            <div className="rounded-[10px] overflow-hidden mt-2">
              <div
                className="w-[200px] h-[100px] bg-cover bg-center"
                style={{
                  backgroundImage: "url('/hero_marketing.jpg')",
                }}
              >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}