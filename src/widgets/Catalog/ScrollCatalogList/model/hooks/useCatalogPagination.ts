import { useEffect, useMemo, useRef, useState } from "react"
import { useSearchParams } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
import { getCatalogCompanies } from "@/entities/Profile/Company/model/api/getCatalogCompanies"
import { useCatalogFiltersStore } from "@/widgets/Catalog/Filters/model/store/useCatalogFiltersStore"

const ITEMS_PER_PAGE = 4
const SORT_OPTIONS = [
  { id: 1, title: "по умолчанию" },
  { id: 2, title: "по рейтингу" },
  { id: 3, title: "по количеству отзывов" },
]

export const useCatalogPagination = () => {
  const searchParams = useSearchParams()
  const selectedFilters = useCatalogFiltersStore((state) => state.selectedFilters)
  const selectedRegions = useCatalogFiltersStore((state) => state.selectedRegions)
  const filtersKey = useMemo(
    () =>
      selectedFilters
        .map((item) => `${item.category}||${item.service}`)
        .sort((a, b) => a.localeCompare(b, "ru", { sensitivity: "base" }))
        .join(","),
    [selectedFilters],
  )
  const regionsKey = useMemo(
    () =>
      [...selectedRegions]
        .sort((a, b) => a.localeCompare(b, "ru", { sensitivity: "base" }))
        .join(","),
    [selectedRegions],
  )
  const [debouncedFiltersKey, setDebouncedFiltersKey] = useState(filtersKey)
  const [debouncedRegionsKey, setDebouncedRegionsKey] = useState(regionsKey)
  const [debouncedFilters, setDebouncedFilters] = useState(selectedFilters)
  const [debouncedRegions, setDebouncedRegions] = useState(selectedRegions)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedFiltersKey(filtersKey)
      setDebouncedRegionsKey(regionsKey)
      setDebouncedFilters(selectedFilters)
      setDebouncedRegions(selectedRegions)
    }, 500)
    return () => clearTimeout(timer)
  }, [filtersKey, selectedFilters, regionsKey, selectedRegions])
  const { data: items = [], isLoading, isError } = useQuery({
    queryKey: ["catalog-companies", debouncedFiltersKey, debouncedRegionsKey],
    queryFn: () => getCatalogCompanies(debouncedFilters, debouncedRegions),
    staleTime: 5 * 60 * 1000,
  })
  const [selectedSortId, setSelectedSortId] = useState<number>(SORT_OPTIONS[0].id)
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false)
  const sortMenuRef = useRef<HTMLDivElement | null>(null)
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

  const selectedSortTitle =
    SORT_OPTIONS.find((option) => option.id === selectedSortId)?.title ??
    SORT_OPTIONS[0].title

  const toggleSortMenu = () => {
    setIsSortMenuOpen((prev) => !prev)
  }

  const selectSort = (id: number) => {
    setSelectedSortId(id)
    setIsSortMenuOpen(false)
  }

  useEffect(() => {
    if (!isSortMenuOpen) return
    const handleClickOutside = (event: MouseEvent) => {
      if (!sortMenuRef.current) return
      if (sortMenuRef.current.contains(event.target as Node)) return
      setIsSortMenuOpen(false)
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isSortMenuOpen])

  return {
    paginatedItems,
    currentPage,
    totalPages,
    isLoading,
    isError,
    isEmpty: items.length === 0,
    sortOptions: SORT_OPTIONS,
    selectedSortId,
    selectedSortTitle,
    isSortMenuOpen,
    toggleSortMenu,
    selectSort,
    sortMenuRef,
  }
}
