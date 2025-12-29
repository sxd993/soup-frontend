"use client"

import { BLOGS, BottomBlogCard, getPriorityBlog } from "@/entities/Blogs"

export const ScrollBlogsList = () => {
    const { item: topBlog } = getPriorityBlog()
    const topBlogId = topBlog?.id
    const blogs = BLOGS.filter((blog) => blog.id !== topBlogId && !blog.isAds)

    return (
        <div className="w-full flex flex-col gap-5">
            {blogs.map((blog) => (
                <div key={blog.id} className="bg-white p-5 rounded-[20px]">
                    <BottomBlogCard 
                        blog={blog}
                        href={`/blogs/${blog.id}`}
                        imageHeight={null}
                    />
                </div>
            ))}
        </div>
    )
}