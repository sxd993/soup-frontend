import Image from "next/image"
import { NewsItem } from "../model/types"

type NewsCardProps = {
    item: NewsItem
    fallbackImage: string
    featured?: boolean
}

export const NewsCard = ({ item, fallbackImage }: NewsCardProps) => {
    return (
<article className="flex flex-col h-full max-w-[400px] min-h-[350px] overflow-hidden">
    
    {/* Картинка */}
    <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
        <Image
            src={item.image || fallbackImage}
            alt={item.imageAlt}
            fill
            className="object-cover"
        />

        <span className="absolute top-4 left-3 px-3 py-1 text-[11px] font-semibold bg-[#EBE7DF] text-secondary rounded-full border border-accent-quaternary">
            {item.badge}
        </span>
    </div>

    {/* Текст */}
    <div className="mt-4">
        <h4 className="text-base lg:text-lg font-semibold leading-tight text-secondary max-w-[75%]">
            {item.title}
        </h4>
    </div>

</article>

    )
}
