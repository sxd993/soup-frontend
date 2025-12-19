import { BlogsItems } from "../model/types";
import { BlogCard } from "./BlogCard";
import Image from "next/image";


interface TopBlogCardSectionProps {
    firstBlog: BlogsItems;
}

export const TopBlogCardSection = ({ firstBlog }: TopBlogCardSectionProps) => {
    return (
        <div className="flex flex-col lg:flex-row gap-5 items-center md:items-stretch">
            {/* Изображение */}
            <div className="w-full flex justify-center md:w-auto">
                <Image
                    width={797}
                    height={500}
                    src={'https://s3.twcstorage.ru/4b615622-soup/blogs/Shapka.svg'} alt="Shapka"
                    className="max-w-full h-auto"
                />
            </div>
            <BlogCard blog={firstBlog} />
        </div>
    )
}
