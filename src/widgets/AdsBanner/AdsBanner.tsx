
import { IMAGES } from "@/shared/config"
import { RightArrow } from "@/shared/ui/icons"
import Image from "next/image"


export const AdsBanner = () => {
    return (
        <div className="p-3 max-w-[200px] w-full h-full bg-primary rounded-[20px] flex flex-col gap-4 relative">
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
            <div className="rounded-[10px] overflow-hidden mt-2 flex justify-center">
                <Image
                    src={IMAGES.hero.advertisement}
                    alt="Advertisement"
                    width={200}
                    height={295}
                    className="object-contain"
                />
            </div>
        </div>
    )
}
