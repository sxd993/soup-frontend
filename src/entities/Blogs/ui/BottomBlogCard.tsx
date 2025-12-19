import { BlogsItems } from "../model/types";
import { Heart } from "@/shared/ui/icons/Heart";
import { Comment } from "@/shared/ui/icons/Comment";
import Image from "next/image";
import { DetailsIcon } from "@/shared/ui/icons/DetailsIcon";

interface BottomBlogCardProps {
    blog: BlogsItems;
}

export const BottomBlogCard = ({ blog }: BottomBlogCardProps) => {
    const { logo, company_name, date, title, description, likes, comments, image } = blog;

    return (
        <article className="flex-1 rounded-2xl flex flex-col justify-between gap-4">
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

            <h3 className="text-xl font-semibold text-secondary leading-[110%]">{title}</h3>
            <p className="text-base text-secondary-quinary leading-[140%]">{description}</p>

            <div className="flex items-center gap-4 text-sm text-accent-quinary">
                <span className="flex items-center gap-1"><Heart /> {likes}</span>
                <span className="flex items-center gap-1"><Comment /> {comments}</span>
            </div>
        </article>
    );
};
