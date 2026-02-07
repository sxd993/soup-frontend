import { Suspense } from "react"
import NewsItemClient from "./NewsItemClient"

export default function NewsItemPage() {
  return (
    <Suspense fallback={null}>
      <NewsItemClient />
    </Suspense>
  )
}
