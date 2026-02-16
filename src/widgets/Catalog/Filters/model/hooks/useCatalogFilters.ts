import { useEffect, useMemo, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { mapContractorsToSections } from "@/shared/lib/catalogFilters"
import { useContractors } from "@/entities/Contractors"
import { fetchRegions } from "@/entities/Regions/model/api/fetchRegions"
import type { RegionItemType } from "@/entities/Regions/model/types/RegionItemType"
import { useCatalogFiltersStore } from "../store/useCatalogFiltersStore"

export const useCatalogFilters = () => {
  const [openSectionIds, setOpenSectionIds] = useState<Set<string>>(() => new Set())
  const { data: contractors = [], isLoading, isError } = useContractors()
  const sections = useMemo(() => mapContractorsToSections(contractors), [contractors])
  const { data: regions = [], isLoading: isRegionsLoading, isError: isRegionsError } = useQuery<
    RegionItemType[]
  >({
    queryKey: ["catalog-regions"],
    queryFn: fetchRegions,
    staleTime: 5 * 60 * 1000,
  })
  const [regionQuery, setRegionQuery] = useState("")
  const [selectedRegionIds, setSelectedRegionIds] = useState<number[]>([])
  const selectedService = useCatalogFiltersStore((state) => state.selectedService)
  const clearSelectedService = useCatalogFiltersStore((state) => state.clearSelectedService)
  const selectedFilters = useCatalogFiltersStore((state) => state.selectedFilters)
  const toggleSelectedFilter = useCatalogFiltersStore((state) => state.toggleSelectedFilter)
  const addSelectedFilter = useCatalogFiltersStore((state) => state.addSelectedFilter)
  const clearSelectedFilters = useCatalogFiltersStore((state) => state.clearSelectedFilters)
  const toggleSelectedRegion = useCatalogFiltersStore((state) => state.toggleSelectedRegion)
  const clearSelectedRegions = useCatalogFiltersStore((state) => state.clearSelectedRegions)

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
    const region = regions.find((item) => item.id === id)
    if (region) {
      toggleSelectedRegion(region.label)
    }
    setSelectedRegionIds((prev) =>
      prev.includes(id) ? prev.filter((value) => value !== id) : [...prev, id],
    )
  }

  const sectionItemMap = useMemo(() => {
    const map = new Map<string, { category: string; service: string }>()
    sections.forEach((section) => {
      section.items.forEach((item) => {
        map.set(item.id, { category: section.label, service: item.label })
      })
    })
    return map
  }, [sections])

  const selectedSectionItemIds = useMemo(
    () => selectedFilters.map((item) => `${item.category}-${item.service}`),
    [selectedFilters],
  )

  const toggleSectionItem = (id: string) => {
    const target = sectionItemMap.get(id)
    if (!target) return
    toggleSelectedFilter(target)
  }

  const resetAll = () => {
    setSelectedRegionIds([])
    clearSelectedFilters()
    clearSelectedRegions()
    setRegionQuery("")
  }

  const isResetDisabled = selectedRegionIds.length === 0 && selectedFilters.length === 0

  useEffect(() => {
    if (!selectedService || sections.length === 0) return
    const targetSection = sections.find((section) => section.label === selectedService.category)
    if (!targetSection) return
    const targetItem = targetSection.items.find((item) => item.label === selectedService.service)
    if (!targetItem) return

    addSelectedFilter({ category: targetSection.label, service: targetItem.label })
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
    getSectionMaxHeight,
  }
}
