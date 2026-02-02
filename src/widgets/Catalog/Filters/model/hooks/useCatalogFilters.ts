import { useEffect, useMemo, useState, type ComponentType } from "react"
import { useQuery } from "@tanstack/react-query"
import { useCatalogFiltersData } from "@/entities/CatalogFilters/model/hooks/useCatalogFiltersData"
import { fetchRegions } from "@/features/Profile/CompanyAccount/AccountSection/company-profile-edit/api/fetchRegions"
import type { RegionItemType } from "@/features/Profile/CompanyAccount/AccountSection/company-profile-edit/model/types/RegionItemType"
import { ICONS_BY_LABEL } from "../../const/iconsByLabel"
import { useCatalogFiltersStore } from "../store/useCatalogFiltersStore"

export const useCatalogFilters = () => {
  const [openSectionIds, setOpenSectionIds] = useState<Set<string>>(() => new Set())
  const { data: sections = [], isLoading, isError } = useCatalogFiltersData()
  const { data: regions = [], isLoading: isRegionsLoading, isError: isRegionsError } = useQuery<
    RegionItemType[]
  >({
    queryKey: ["catalog-regions"],
    queryFn: fetchRegions,
    staleTime: 5 * 60 * 1000,
  })
  const [regionQuery, setRegionQuery] = useState("")
  const [selectedRegionIds, setSelectedRegionIds] = useState<number[]>([])
  const [selectedSectionItemIds, setSelectedSectionItemIds] = useState<string[]>([])
  const selectedService = useCatalogFiltersStore((state) => state.selectedService)
  const clearSelectedService = useCatalogFiltersStore((state) => state.clearSelectedService)

  const toggleSection = (sectionId: string) => {
    setOpenSectionIds((prev) => {
      const next = new Set(prev)
      if (next.has(sectionId)) {
        next.delete(sectionId)
      } else {
        next.add(sectionId)
      }
      return next
    })
  }

  const filteredRegions = useMemo(() => {
    const normalized = regionQuery.trim().toLowerCase()
    if (!normalized) return regions
    return regions.filter((region) => region.label.toLowerCase().includes(normalized))
  }, [regionQuery, regions])

  const toggleRegion = (id: number) => {
    setSelectedRegionIds((prev) =>
      prev.includes(id) ? prev.filter((value) => value !== id) : [...prev, id],
    )
  }

  const toggleSectionItem = (id: string) => {
    setSelectedSectionItemIds((prev) =>
      prev.includes(id) ? prev.filter((value) => value !== id) : [...prev, id],
    )
  }

  const resetAll = () => {
    setSelectedRegionIds([])
    setSelectedSectionItemIds([])
    setRegionQuery("")
  }

  const isResetDisabled = selectedRegionIds.length === 0 && selectedSectionItemIds.length === 0

  const iconMap = ICONS_BY_LABEL as Record<string, ComponentType<{ isActive?: boolean }>>

  useEffect(() => {
    if (!selectedService || sections.length === 0) return
    const targetSection = sections.find((section) => section.label === selectedService.category)
    if (!targetSection) return
    const targetItem = targetSection.items.find((item) => item.label === selectedService.service)
    if (!targetItem) return

    setSelectedSectionItemIds((prev) =>
      prev.includes(targetItem.id) ? prev : [...prev, targetItem.id],
    )
    setOpenSectionIds((prev) => {
      if (prev.has(targetSection.id)) return prev
      const next = new Set(prev)
      next.add(targetSection.id)
      return next
    })
    clearSelectedService()
  }, [sections, selectedService, clearSelectedService])

  const getSectionMaxHeight = (itemsCount: number, isOpen: boolean) => {
    if (!isOpen) return "0px"
    const rowsHeight = itemsCount * 32
    const gapsHeight = Math.max(itemsCount - 1, 0) * 12
    return `${rowsHeight + gapsHeight}px`
  }

  return {
    openSectionIds,
    toggleSection,
    sections,
    isLoading,
    isError,
    regions,
    isRegionsLoading,
    isRegionsError,
    regionQuery,
    setRegionQuery,
    filteredRegions,
    selectedRegionIds,
    toggleRegion,
    selectedSectionItemIds,
    toggleSectionItem,
    resetAll,
    isResetDisabled,
    iconMap,
    getSectionMaxHeight,
  }
}
