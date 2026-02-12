import { Suspense } from "react"
import { LoadingState } from "@/shared/ui"
import { BlogsPage } from "@/widgets/Blogs"

export default function BlogsRoute() {
  return (
    <Suspense fallback={<LoadingState />}>
      <BlogsPage />
    </Suspense>
  )
}
