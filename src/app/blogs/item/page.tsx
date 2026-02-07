import { Suspense } from "react"
import BlogsItemClient from "./BlogsItemClient"

export default function BlogsItemPage() {
  return (
    <Suspense fallback={null}>
      <BlogsItemClient />
    </Suspense>
  )
}
