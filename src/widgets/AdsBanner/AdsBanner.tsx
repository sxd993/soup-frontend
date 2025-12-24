import { IMAGES } from "@/shared/config"
import { RightArrowHome } from "@/shared/ui/icons/RightArrowHome"
import Image from "next/image"


export const AdsBanner = () => {
    return (
        <div className="px-8 py-4 bg-primary rounded-[20px] flex flex-col flex-1 justify-between">

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
            <h4 className="text-white text-sm font-semibold leading-[130%]">
                Облагородим территорию вашего дома быстрее и лучше всех. Собственное производство
            </h4>

            {/* Изображение */}
            <div className="rounded-[10px] overflow-hidden mt-2 flex justify-center">
                <Image
                    src={IMAGES.hero.advertisement}
                    alt="Advertisement"
                    width={288}
                    height={261}
                />
            </div>
        </div>
    )
}
