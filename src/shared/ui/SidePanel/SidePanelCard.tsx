import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/shared"

type SidePanelCardProps = {
    image: string
    imageAlt: string
    title: string
    badge?: string
    href: string
}

export const SidePanelCard = ({ image, imageAlt, title, badge, href }: SidePanelCardProps) => {
    return (
        <Link href={href} className="block h-full cursor-pointer">
            <article className="flex flex-col">
                <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden">
                    <Image
                        src={image}
                        alt={imageAlt}
                        fill
                        className="object-cover"
                    />
                    {badge && (
                        <span className="absolute top-3 left-3">
                            <Badge badge={badge} />
                        </span>
                    )}
                </div>
                <div className="mt-2">
                    <h4
                        className="text-base font-bold leading-[120%] text-secondary text-wrap"
                        style={{ fontFamily: 'Manrope, var(--font-family-sans)' }}
                    >
                        {title}
                    </h4>
                </div>
            </article>
        </Link>
    )
}