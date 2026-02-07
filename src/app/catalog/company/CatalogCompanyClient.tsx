"use client"

import { useSearchParams } from "next/navigation"
import { CompanyPublicPage } from "@/widgets/Company/PublicCompany"

export default function CatalogCompanyClient() {
  const searchParams = useSearchParams()
  const companyId = searchParams?.get("id") || ""

  return <CompanyPublicPage companyId={companyId} />
}
