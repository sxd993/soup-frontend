import { IMAGES } from "@/shared/config"
import { RightArrowHome } from "@/shared/ui/icons"
import Image from "next/image"


interface AdsBannerProps {
    hasDescription: boolean
}


export const AdsBanner = ({ hasDescription }: AdsBannerProps) => {
    return (
        <div className="p-5 bg-primary rounded-[20px] flex flex-col flex-1 justify-between h-full gap-4">

            {/* Верхняя часть: метка "Реклама" и кнопка */}
            <div className="flex items-center justify-between">
                <p className="text-white opacity-50 font-medium text-xs items-center">Реклама</p>
                <RightArrowHome />
            </div>

            {/* Заголовок */}
            <h3 className="text-white text-xl font-bold leading-[115%]">
                Комплексное благоустройство <br /> территорий
            </h3>

            {/* Описание */}
            {hasDescription && (
                <h4 className="text-white text-sm font-semibold leading-[130%]">
                    Облагородим территорию вашего дома быстрее и лучше всех. Собственное производство
                </h4>
            )}

            {/* Изображение */}
            <div className="relative w-full flex-1 min-h-[120px] overflow-hidden rounded-[10px]">
                <Image
                    src={IMAGES.hero.advertisement}
                    alt="Advertisement"
                    fill
                    className="object-cover object-center"
                />
            </div>
        </div>
    )
}
