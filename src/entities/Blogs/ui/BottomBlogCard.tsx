import Link from "next/link"
import { BlogItem } from "../model/types";
import { Heart, Comment, DetailsIcon } from "@/shared";
import Image from "next/image";

type BottomBlogCardProps = {
    blog: BlogItem;
    href?: string;
    className?: string;
}

export const BottomBlogCard = ({ blog, href, className }: BottomBlogCardProps) => {
    const { logo, company_name, date, title, description, likes, comments, image } = blog;

    const articleClasses = ["flex-1 rounded-2xl flex flex-col justify-between gap-4", className].filter(Boolean).join(" ")

    const card = (
        <article className={articleClasses}>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div>{logo}</div>
                    <div className="flex flex-col justify-between">
                        <h4 className="font-semibold text-base text-secondary">{company_name}</h4>
                        <span className="text-sm text-accent-quinary">{date}</span>
                    </div>

                </div>
                <DetailsIcon />
            </div>

            {image && (
                <div className="overflow-hidden rounded-xl">
                    <Image
                        src={image}
                        alt={title}
                        width={387}
                        height={144}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            <h3 className="text-[22px] font-bold text-secondary leading-[105%]">{title}</h3>
            <p className="text-base text-secondary-quinary">{description}</p>

            <div className="flex items-center gap-4 text-sm text-accent-quinary">
                <span className="flex items-center gap-1"><Heart /> {likes}</span>
                <span className="flex items-center gap-1"><Comment /> {comments}</span>
            </div>
        </article>
    );

    if (!href) {
        return card
    }

    return (
        <Link
            href={href}
            className="block h-full cursor-pointer"
        >
            {card}
        </Link>
    );
};