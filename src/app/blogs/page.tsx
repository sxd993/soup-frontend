import { Suspense } from "react"
import { BlogsPage, BlogsPageSkeleton } from "@/widgets/Blogs"

export default function BlogsRoute() {
  return (
    <Suspense fallback={<BlogsPageSkeleton />}>
      <BlogsPage />
    </Suspense>
  )
}
