import { IMAGES } from "@/shared/config"
import { RightArrowHome } from "@/shared/ui/icons/RightArrowHome"
import Image from "next/image"


export const AdsBanner = () => {
    return (
        <div className="p-3 max-w-[220px] w-full h-full bg-primary rounded-[20px] flex flex-col gap-1 relative">
            {/* Верхняя часть: метка "Реклама" и кнопка */}
            <div className="flex items-center justify-between">
                <p className="text-white opacity-50 font-medium text-xs items-center">Реклама</p>
                <RightArrowHome />
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
