import { Suspense } from "react"
import CatalogCompanyClient from "./CatalogCompanyClient"
import { LoadingState } from "@/shared/ui"

export default function CatalogCompanyPage() {
  return (
    <Suspense fallback={<LoadingState />}>
      <CatalogCompanyClient />
    </Suspense>
  )
}
