import { Heart } from "@/shared/ui/icons/Heart";
import { BlogsItems } from "../model/types";
import { Comment } from "@/shared/ui/icons/Comment";
import Image from "next/image";

interface BlogCardProps {
    blog: BlogsItems;
}

export const BlogCard = ({ blog }: BlogCardProps) => {
    const { logo, company_name, date, title, description, likes, comments } = blog;

    return (
        <>
            {/* Карточка блога */}
            <article className="flex-1 border border-[#EFEFEF] rounded-2xl flex flex-col justify-between gap-2">
                {/* Фотка для нижних блогов */}
                {blog.image && (
                    <div>
                        <Image
                            src={blog.image}
                            alt={blog.title}
                            width={387}
                            height={144}
                        />
                    </div>
                )}
                <div className="flex items-center justify-between">
                    {/* Лого и название компании */}
                    <div className="flex items-center gap-2">
                        <div>{logo}</div>
                        <h4 className="font-semibold text-base text-secondary">{company_name}</h4>
                    </div>
                    {/* Дата */}
                    <span className="text-sm text-accent-quinary">{date}</span>
                </div>

                {/* Заголовок */}
                <h3 className="text-xl font-semibold text-secondary leading-tight">{title}</h3>
                {/* Описание */}
                <p className="text-base text-secondary-quinary leading-relaxed">{description}</p>

                {/* Социальные взаимодействия */}
                <div className="flex items-center gap-4 text-sm text-accent-quinary">
                    <span className="flex items-center gap-1"><Heart /> {likes}</span>
                    <span className="flex items-center gap-1"><Comment /> {comments}</span>
                </div>
            </article>
        </>
    );
};
