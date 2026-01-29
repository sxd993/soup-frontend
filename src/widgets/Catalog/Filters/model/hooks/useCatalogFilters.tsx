import { useMemo, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { useCatalogFiltersData } from "@/entities/CatalogFilters/model/hooks/useCatalogFiltersData"
import { fetchRegions } from "@/features/Profile/CompanyAccount/AccountSection/company-profile-edit/api/fetchRegions"
import type { RegionItemType } from "@/features/Profile/CompanyAccount/AccountSection/company-profile-edit/model/types/RegionItemType"
import { ICONS_BY_LABEL } from "../../const/iconsByLabel"

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

  const iconMap = ICONS_BY_LABEL

  const getIconForLabel = (label: string, isActive: boolean) => {
    const Icon = iconMap[label]
    return Icon ? <Icon isActive={isActive} /> : label[0]
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
    getIconForLabel,
  }
}
