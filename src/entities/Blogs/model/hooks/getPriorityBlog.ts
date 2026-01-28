import { BLOGS } from "../const/blogs"
import type { BlogItem } from "../types/blogs.types"

export const getPriorityBlog = (): {
    item: BlogItem | undefined
    href: string
} => {
    const priorityItem = BLOGS.find((blog) => blog.isImportantBlog)
    const fallbackItem = BLOGS[0]
    const item = priorityItem ?? fallbackItem ?? BLOGS[0]
    const href = item ? `/blogs/${item.id}` : ""

    return { item, href }
}