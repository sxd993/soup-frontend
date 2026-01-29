import { useMemo } from "react"
import { useSearchParams } from "next/navigation"
import type { CompanyCardData } from "@/entities/Profile/Company/model/types/company.types"

const ITEMS_PER_PAGE = 4

export const useCatalogPagination = (items: CompanyCardData[]) => {
  const searchParams = useSearchParams()
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
  }
}
