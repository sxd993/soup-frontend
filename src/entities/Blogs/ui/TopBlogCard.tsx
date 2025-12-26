import { BlogsItems } from "../model/types";
import { Heart, Comment } from "@/shared/ui/icons";

interface TopBlogCardProps {
    blog: BlogsItems;
}

export const TopBlogCard = ({ blog }: TopBlogCardProps) => {
    const { logo, company_name, date, title, description, likes, comments } = blog;

    return (
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
    );
};
