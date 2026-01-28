import Link from "next/link"
import { getPriorityBlog, type BlogItem } from ".."
import { Heart, Comment } from "@/shared/ui"
import Image from "next/image"

type TopBlogCardProps = {
    blog?: BlogItem;
    href?: string;
    className?: string;
}

export const TopBlogCard = ({ blog: blogProp, href: hrefProp, className }: TopBlogCardProps = {}) => {
    const { item: blogFromHook, href: hrefFromHook } = getPriorityBlog()
    const blog = blogProp ?? blogFromHook
    const href = hrefProp ?? hrefFromHook

    if (!blog) {
        return null
    }

    const { logo, company_name, date, title, description, likes, comments, image } = blog

    const card = (
        <div className={`flex flex-col lg:flex-row gap-5 items-center md:items-stretch ${className ?? ""}`}>
            {/* Изображение */}
            {image && (
                <div className="w-full flex justify-center md:w-auto">
                    <Image
                        width={797}
                        height={500}
                        src={image}
                        alt={title}
                        className="max-w-full h-auto"
                    />
                </div>
            )}
            <article className="flex-1 rounded-2xl flex flex-col justify-between gap-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div>{logo}</div>
                        <h4 className="font-semibold text-base text-secondary">{company_name}</h4>
                    </div>
                    <span className="text-sm text-accent-quinary">{date}</span>
                </div>

                <h3 className="text-[22px] font-bold text-secondary leading-[105%]">{title}</h3>
                <p className="text-base text-secondary-quinary">{description}</p>

                <div className="flex items-center gap-4 text-sm text-accent-quinary">
                    <span className="flex items-center gap-1"><Heart /> {likes}</span>
                    <span className="flex items-center gap-1"><Comment /> {comments}</span>
                </div>
            </article>
        </div>
    );

    return (
        <Link href={href} className="block cursor-pointer">
            {card}
        </Link>
    )
}