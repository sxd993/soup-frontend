"use client"

import { BlogFormBody } from "./BlogFormBody"

type EditBlogFormProps = {
  blogId: string
}

export function EditBlogForm({ blogId }: EditBlogFormProps) {
  return <BlogFormBody mode="edit" blogId={blogId} />
}