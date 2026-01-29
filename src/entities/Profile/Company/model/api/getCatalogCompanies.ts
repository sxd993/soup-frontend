import { AxiosClient } from "@/shared/api"
import type { CompanyCardData } from "../types/company.types"

type CatalogCompanyResponse = {
  id?: string | number
  companyId?: string | number
  name?: string | null
  description?: string | null
  logo_url?: string | null
}

export const getCatalogCompanies = async (): Promise<CompanyCardData[]> => {
  const response = await AxiosClient.get<CatalogCompanyResponse[]>("/companies")
  return response.data.map((company, index) => ({
    id: String(company.id ?? company.companyId ?? company.name ?? index),
    name: company.name ?? "",
    description: company.description ?? "",
    logoUrl: company.logo_url ?? null,
  }))
}
