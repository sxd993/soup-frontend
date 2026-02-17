import { Suspense } from "react"
import EditBlogClient from "./EditBlogClient"
import { LoadingState } from "@/shared/ui"

export default function EditBlogPage() {
  return (
    <Suspense fallback={<LoadingState />}>
      <EditBlogClient />
    </Suspense>
  )
}
