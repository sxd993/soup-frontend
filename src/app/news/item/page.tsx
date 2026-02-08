import { Suspense } from "react"
import { NewsItemPage } from "@/widgets/News"

export default function NewsItemsPage() {
  return (
    <Suspense fallback={null}>
      <NewsItemPage />
    </Suspense>
  )
}
