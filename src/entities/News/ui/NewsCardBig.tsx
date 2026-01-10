'use client';

import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/shared/ui"
import { usePriorityNews } from ".."

type NewsCardBigProps = {
    className?: string
}

// Компонент большой карточки новости {отображает приоритетную новость из API}
export const NewsCardBig = ({ className }: NewsCardBigProps = {}) => {
    const { item, href, isLoading } = usePriorityNews()

    if (isLoading || !item) {
        return null
    }

    const card = (
        <article className="relative w-full min-h-[480px] overflow-hidden rounded-[40px] h-full">
            <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                className="object-cover max-h-[480px] lg:max-h-none"
            />

            <div className="absolute bottom-5 left-5 right-5 max-w-[367px]">
                <div className="flex flex-col gap-5">
                    <Badge badge={item.category} />
                    <div className="rounded-[20px] bg-white p-5 pb-15 shadow-sm fade-out-in">
                        <h3 className="lg:text-[22px] text-xl font-bold leading-snug text-accent-secondary">
                            {item.title}
                        </h3>
                        <p className="mt-2 text-[16px] font-normal text-secondary">
                            {item.description}
                        </p>
                    </div>
                </div>
            </div>
        </article>
    )

    return (
        <Link
            href={href}
            className={`relative block w-full min-h-[480px] overflow-hidden rounded-[40px] cursor-pointer ${className ?? ""}`}
        >
            {card}
        </Link>
    )
}