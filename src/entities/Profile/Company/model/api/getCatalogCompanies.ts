import { AxiosClient } from "@/shared/api"
import type { CompanyCardData } from "../types/company.types"

type CatalogCompanyResponse = {
  id?: string | number
  companyId?: string | number
  name?: string | null
  description?: string | null
  logo_url?: string | null
  address?: string | null
  rating?: number | null
  reviews_count?: number | null
}

type CatalogCompanyFilter = {
  category: string
  service: string
}

type SortOption = "default" | "rating" | "reviews"

export const getCatalogCompanies = async (
  filters: CatalogCompanyFilter[] = [],
  regions: string[] = [],
  sort?: SortOption,
): Promise<CompanyCardData[]> => {
  try {
    const filtersParam =
      filters.length > 0
        ? filters
            .map((filter) => `${filter.category}||${filter.service}`)
            .join(",")
        : undefined
    const regionsParam = regions.length > 0 ? regions.join(",") : undefined
    const sortParam = sort && sort !== "default" ? sort : undefined

    const params: Record<string, string> = {}
    if (filtersParam) params.filters = filtersParam
    if (regionsParam) params.regions = regionsParam
    if (sortParam) params.sort = sortParam

    const response = await AxiosClient.get<CatalogCompanyResponse[]>("/companies", {
      params: Object.keys(params).length > 0 ? params : undefined,
    })
    const items = Array.isArray(response.data) ? response.data : []

    return items.map((company, index) => ({
      id: String(company.id ?? company.companyId ?? company.name ?? index),
      name: company.name ?? "",
      description: company.description ?? "",
      logoUrl: company.logo_url ?? null,
      address: company.address ?? null,
      rating: company.rating != null ? Number(company.rating) : 0,
      reviewsCount: company.reviews_count != null ? Number(company.reviews_count) : 0,
    }))
  } catch {
    return []
  }
}
