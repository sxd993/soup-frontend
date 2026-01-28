import Link from "next/link"
import Image from "next/image"
import { Heart, Comment, DetailsIcon } from "@/shared/ui"
import type { BlogItem } from "@/entities/Blogs"

type BlogSidePanelCardProps = {
    item: BlogItem
    href: string
}

export const BlogSidePanelCard = ({ item, href }: BlogSidePanelCardProps) => {
    return (
        <article className="group flex flex-col gap-4">
            {/* Шапка карточки */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div>{item.logo}</div>
                    <div className="flex flex-col justify-between">
                        <h4 className="font-semibold text-base text-secondary">{item.company_name}</h4>
                        <span className="text-sm text-accent-quinary">{item.date}</span>
                    </div>
                </div>
                <DetailsIcon />
            </div>

            {/* Изображение */}
            {item.image && (
                <div className="relative w-full h-[144px] rounded-[20px] overflow-hidden">
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            {/* Заголовок */}
            <h3 className="text-[22px] font-bold text-secondary leading-[105%]">{item.title}</h3>

            {/* Описание */}
            <p className="text-base text-secondary-quinary">{item.description}</p>

            {/* Лайки, комментарии и кнопка "Читать" */}
            <div className="flex items-center justify-between text-sm text-accent-quinary">
                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 cursor-pointer">
                        <Heart /> {item.likes}
                    </span>
                    <span className="flex items-center gap-1 cursor-pointer">
                        <Comment /> {item.comments}
                    </span>
                </div>
                <Link
                    href={href}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                    <button
                        type="button"
                        className="inline-flex items-center justify-center text-accent-senary font-semibold bg-primary hover:bg-accent transition-all duration-300 text-base px-5 py-1 rounded-[50px] cursor-pointer"
                    >
                        Читать
                    </button>
                </Link>
            </div>
        </article>
    )
}