import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/shared/ui"
import type { NewsItem } from ".."

type NewsCardBigProps = {
    className?: string
    item?: NewsItem
}

// Компонент большой карточки новости {отображает приоритетную новость из API}
export const NewsCardBig = ({ className, item }: NewsCardBigProps = {}) => {
    if (!item) {
        return null
    }

    const badgeHref = item.category ? `/news?badge=${encodeURIComponent(item.category)}` : undefined

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
                    <div className="relative z-20">
                        {badgeHref ? (
                            <Link href={badgeHref} className="relative z-20">
                                <Badge badge={item.category} />
                            </Link>
                        ) : (
                            <Badge badge={item.category} />
                        )}
                    </div>
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
        <div className={`relative w-full min-h-[480px] ${className ?? ""}`}>
            {card}
            <Link
                href={`/news/${item.id}`}
                aria-label={item.title}
                className="absolute inset-0 z-10"
            />
        </div>
    )
}