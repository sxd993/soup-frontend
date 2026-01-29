import { useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
import { getCatalogCompanies } from "@/entities/Profile/Company/model/api/getCatalogCompanies"

const ITEMS_PER_PAGE = 4

export const useCatalogPagination = () => {
  const searchParams = useSearchParams()
  const { data: items = [], isLoading, isError } = useQuery({
    queryKey: ["catalog-companies"],
    queryFn: getCatalogCompanies,
    staleTime: 5 * 60 * 1000,
  })
  const rawPage = Number(searchParams?.get("page") ?? "1")
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE)
  const currentPage = Number.isFinite(rawPage)
    ? Math.min(Math.max(rawPage, 1), Math.max(totalPages, 1))
    : 1

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE
    return items.slice(startIndex, endIndex)
  }, [items, currentPage])

  return {
    paginatedItems,
    currentPage,
    totalPages,
    isLoading,
    isError,
    isEmpty: items.length === 0,
  }
}
