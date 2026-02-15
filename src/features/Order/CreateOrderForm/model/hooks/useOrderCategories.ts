"use client"

import { useQuery } from "@tanstack/react-query"
import { getCatalogFilters } from "@/entities/CatalogFilters"

export const useOrderCategories = () => {
  const { data: categories = [], isLoading, isError } = useQuery({
    queryKey: ["catalog-filters"],
    queryFn: getCatalogFilters,
    staleTime: 10 * 60 * 1000,
  })
  return { categories, isLoading, isError }
}
