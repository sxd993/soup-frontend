"use client"

import Link from "next/link"
import Image from "next/image"
import { NewsItem } from "../model/types"
import { Badge } from "@/shared/ui/Badge"

type NewsCardBigProps = {
    item: NewsItem
    withDescription?: boolean
    href?: string
    className?: string
}

export const NewsCardBig = ({
    item,
    withDescription = true,
    href,
    className,
}: NewsCardBigProps) => {
    const containerClasses = `relative w-full overflow-hidden rounded-[40px] min-h-[520px] ${className ?? ''}`

    const card = (
        <article
            className={containerClasses}
        >
            <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                className="object-cover"
            />

            <span className="absolute top-5 left-5">
                <Badge badge={item.badge} />
            </span>

            <div className="absolute bottom-6 left-6 right-6 max-w-[540px]">
                <div className="rounded-[20px] bg-white/95 p-5 pb-6 shadow-sm backdrop-blur-sm">
                    <h3 className="lg:text-[22px] text-xl font-bold leading-[105%] text-accent-secondary">
                        {item.title}
                    </h3>
                    {withDescription && item.description && (
                        <p className="mt-2 text-[16px] font-medium text-secondary">
                            {item.description}
                        </p>
                    )}
                    {item.date && (
                        <p className="mt-3 text-sm text-accent-quinary">{item.date}</p>
                    )}
                </div>
            </div>
        </article>
    )

    if (!href) {
        return card
    }

    return (
        <Link href={href} className="block h-full">
            {card}
        </Link>
    )
}
