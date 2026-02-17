import { RightArrowHome } from "@/shared/ui"
import Image from "next/image"


interface AdsBannerProps {
    hasDescription: boolean
    className?: string
    /** Компактный размер для hero-секции */
    variant?: "default" | "hero"
}

const sizeClasses = {
    default: "h-[340px] min-w-[280px]",
    hero: "h-[260px] w-[220px] min-w-0 shrink-0",
} as const

export const AdsBanner = ({ hasDescription, className, variant = "default" }: AdsBannerProps) => {
    return (
        <div className={`${sizeClasses[variant]} shrink-0 overflow-hidden p-4 bg-primary rounded-[20px] flex flex-col justify-between gap-3 ${className ?? ""}`}>

            {/* Верхняя часть: метка "Реклама" и кнопка */}
            <div className="flex items-center justify-between">
                <p className="text-white opacity-50 font-medium text-[12px] leading-none">Реклама</p>
                <RightArrowHome className="h-6 w-6 shrink-0 cursor-pointer" aria-hidden />
            </div>

            {/* Заголовок */}
            <h3 className="-mt-2 text-white text-[16px] font-medium leading-[20px] tracking-wide">
                Комплексное благоустройство <br /> территорий
            </h3>

            {/* Описание */}
            {hasDescription && (
                <h4 className="text-white text-sm font-semibold leading-[130%]">
                    Облагородим территорию вашего дома быстрее и лучше всех. Собственное производство
                </h4>
            )}

            {/* Изображение */}
            <div className="relative min-h-0 w-full flex-1 overflow-hidden rounded-[10px]">
                <Image
                    src="https://s3.twcstorage.ru/4b615622-soup/ads-mock.svg"
                    alt="Advertisement"
                    fill
                    className="object-cover object-center"
                />
            </div>
        </div>
    )
}
