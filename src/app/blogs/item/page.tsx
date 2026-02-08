import { Suspense } from "react"
import { BlogItemPage } from "@/widgets/Blogs"

export default function BlogsItemPage() {
  return (
    <Suspense fallback={null}>
      <BlogItemPage />
    </Suspense>
  )
}
