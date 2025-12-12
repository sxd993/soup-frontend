import { BlogsItems } from "../model/types";
import { BlogCard } from "./BlogCard";
import Image from "next/image";


interface TopBlogCardSectionProps {
    firstBlog: BlogsItems;
}

export const TopBlogCardSection = ({ firstBlog }: TopBlogCardSectionProps) => {
    return (
        <div className="flex gap-5">
            {/* Изображение */}
            <div>
                <Image
                    width={797}
                    height={500}
                    src={'https://s3.twcstorage.ru/4b615622-soup/blogs/Shapka.svg'} alt="Shapka"
                />
            </div>
            <BlogCard blog={firstBlog} />
        </div>
    )
}