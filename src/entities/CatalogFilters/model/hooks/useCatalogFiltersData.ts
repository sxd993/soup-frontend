import { useQuery } from "@tanstack/react-query"
import { getCatalogFilters } from "../api/catalog-filters.api"
import type { CatalogFilterSection } from "../types/catalog-filters.types"

export const useCatalogFiltersData = () => {
  return useQuery<CatalogFilterSection[]>({
    queryKey: ["catalog-filters"],
    queryFn: getCatalogFilters,
    staleTime: 5 * 60 * 1000,
  })
}
