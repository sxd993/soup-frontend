import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/shared"
import { getPriorityNews } from "../model/useNewsCardBig"
import { NewsItem } from "../model/types"

type NewsCardBigProps = {
    item?: NewsItem
    href?: string
    className?: string
}

export const NewsCardBig = ({ item: itemProp, href: hrefProp, className }: NewsCardBigProps = {}) => {
    const { item: itemFromHook, href: hrefFromHook } = getPriorityNews()
    const item = itemProp ?? itemFromHook
    const href = hrefProp ?? hrefFromHook

    if (!item) {
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
                    <Badge badge={item.badge} />
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