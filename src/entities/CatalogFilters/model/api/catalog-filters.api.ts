import { AxiosClient } from "@/shared/api/AxiosClient"
import type { CatalogFilterSection } from "../types/catalog-filters.types"

type CatalogFiltersResponse = {
  category: string
  items: string[]
}

export const getCatalogFilters = async (): Promise<CatalogFilterSection[]> => {
  const response = await AxiosClient.get<CatalogFiltersResponse[]>("/catalog/filters")
  return response.data.map((section) => ({
    id: section.category,
    label: section.category,
    items: section.items.map((item) => ({
      id: `${section.category}-${item}`,
      label: item,
    })),
  }))
}
