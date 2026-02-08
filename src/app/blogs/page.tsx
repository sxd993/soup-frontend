import { Suspense } from "react"
import { BlogsPage } from "@/widgets/Blogs"

export default function BlogsRoute() {
  return (
    <Suspense fallback={null}>
      <BlogsPage />
    </Suspense>
  )
}
