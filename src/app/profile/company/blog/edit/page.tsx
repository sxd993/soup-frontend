import { Suspense } from "react"
import EditBlogClient from "./EditBlogClient"

export default function EditBlogPage() {
  return (
    <Suspense fallback={null}>
      <EditBlogClient />
    </Suspense>
  )
}
