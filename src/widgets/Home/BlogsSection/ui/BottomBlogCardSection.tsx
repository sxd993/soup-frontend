import { BottomBlogCard } from "@/entities";
import { BlogsItems } from "@/entities/Blogs/model/types";

interface BottomBlogCardSectionProps {
    blogs: BlogsItems[];
    className?: string;
}

export const BottomBlogCardSection = ({ blogs, className = "" }: BottomBlogCardSectionProps) => {
    return (
        <div
            className={`
                grid gap-5
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
                ${className}
            `}
        >
            {blogs.map((blog) => (
                <BottomBlogCard key={blog.id} blog={blog} />
            ))}
        </div>
    );
};
