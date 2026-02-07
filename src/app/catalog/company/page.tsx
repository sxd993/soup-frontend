import { Suspense } from "react"
import CatalogCompanyClient from "./CatalogCompanyClient"

export default function CatalogCompanyPage() {
  return (
    <Suspense fallback={null}>
      <CatalogCompanyClient />
    </Suspense>
  )
}
