import Link from "next/link"
import Image from "next/image"
import { NewsItem } from "@/entities/News/model/types"
import { Badge } from "@/shared/ui/Badge"

type SidePanelCardProps = {
    item: NewsItem
    href: string
}

export const SidePanelCard = ({ item, href }: SidePanelCardProps) => {
    return (
        <Link href={href} className="block h-full cursor-pointer">
            <article className="flex flex-col">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        className="object-cover"
                    />
                    <span className="absolute top-3 left-3">
                        <Badge badge={item.badge} />
                    </span>
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
        </Link>
    )
}
