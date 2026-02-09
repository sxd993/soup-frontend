import { AxiosClient } from "@/shared/api"
import type { CompanyCardData } from "../types/company.types"

type CatalogCompanyResponse = {
  id?: string | number
  companyId?: string | number
  name?: string | null
  description?: string | null
  logo_url?: string | null
}

type CatalogCompanyFilter = {
  category: string
  service: string
}

export const getCatalogCompanies = async (
  filters: CatalogCompanyFilter[] = [],
  regions: string[] = [],
): Promise<CompanyCardData[]> => {
  try {
    const filtersParam =
      filters.length > 0
        ? filters
            .map((filter) => `${filter.category}||${filter.service}`)
            .join(",")
        : undefined
    const regionsParam = regions.length > 0 ? regions.join(",") : undefined

    const response = await AxiosClient.get<CatalogCompanyResponse[]>("/companies", {
      params:
        filtersParam || regionsParam
          ? {
              filters: filtersParam,
              regions: regionsParam,
            }
          : undefined,
    })
    const items = Array.isArray(response.data) ? response.data : []

    return items.map((company, index) => ({
      id: String(company.id ?? company.companyId ?? company.name ?? index),
      name: company.name ?? "",
      description: company.description ?? "",
      logoUrl: company.logo_url ?? null,
    }))
  } catch {
    return []
  }
}
