import { BLOGS } from "../const/blogs";
import { IMAGES } from "@/shared/config"
import type { BlogItem } from './../types/blogs.types';

export const getPriorityBlog = (): {
    item: BlogItem | undefined;
    href: string;
    fallbackImage: string
} => {
    const priorityItem = BLOGS.find((blog) => blog.isImportantBlog)
    const fallbackItem = BLOGS[0]
    const item = priorityItem ?? fallbackItem ?? BLOGS[0]
    const href = item ? `/blogs/${item.id}` : ""
    const fallbackImage = IMAGES.hero.background

    return { item, href, fallbackImage }
}