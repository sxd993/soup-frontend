import Link from "next/link"
import type { BlogItem } from "..";
import { Heart, Comment, DetailsIcon } from "@/shared/ui";
import Image from "next/image";

type BottomBlogCardProps = {
    blog: BlogItem;
    href?: string;
    className?: string;
    imageHeight?: number | null;
}

export const BottomBlogCard = ({ blog, href, className, imageHeight = 144 }: BottomBlogCardProps) => {
    const { logo, company_name, date, title, description, likes, comments, image } = blog;

    const articleClasses = ["flex-1 rounded-2xl flex flex-col justify-between gap-4", className]
        .filter(Boolean)
        .join(" ");

    return (
        <article className={`group ${articleClasses}`}>
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
                <div
                    className={`overflow-hidden ${imageHeight !== null ? "h-[144px] rounded-[20px]" : "rounded-xl"}`}
                >
                    <Image
                        src={image}
                        alt={title}
                        width={387}
                        height={imageHeight ?? 144}
                        className={`w-full ${imageHeight === null ? "h-auto object-contain" : "h-full object-cover"}`}
                    />
                </div>
            )}

            <h3 className="text-[22px] font-bold text-secondary leading-[105%]">{title}</h3>
            <p className="text-base text-secondary-quinary">{description}</p>

            <div className="flex items-center justify-between text-sm text-accent-quinary">
                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 cursor-pointer">
                        <Heart /> {likes}
                    </span>
                    <span className="flex items-center gap-1 cursor-pointer">
                        <Comment /> {comments}
                    </span>
                </div>
                {href && (
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
                )}
            </div>
        </article>
    );
};