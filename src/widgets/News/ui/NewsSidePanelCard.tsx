import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/shared/ui"
import type { NewsItem } from "@/entities/News"

type NewsSidePanelCardProps = {
    item: NewsItem
    href: string
}

export const NewsSidePanelCard = ({ item, href }: NewsSidePanelCardProps) => {
    const badgeHref = item.category ? `/news?badge=${encodeURIComponent(item.category)}` : undefined

    return (
        <div className="relative h-full group">
            <article className="flex flex-col">
                <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden">
                    <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        className="object-cover transform transition-transform duration-300 group-hover:scale-115"
                    />
                    {item.category && (
                        <span className="absolute top-3 left-3 z-20">
                            {badgeHref ? (
                                <Link href={badgeHref} className="relative z-20">
                                    <Badge badge={item.category} />
                                </Link>
                            ) : (
                                <Badge badge={item.category} />
                            )}
                        </span>
                    )}
                </div>
                <div className="mt-2">
                    <h4
                        className="text-base font-bold leading-[120%] text-secondary text-wrap"
                        style={{ fontFamily: 'Manrope, var(--font-family-sans)' }}
                    >
                        {item.title}
                    </h4>
                </div>
            </article>
            <Link href={href} aria-label={item.title} className="absolute inset-0 z-10" />
        </div>
    )
}