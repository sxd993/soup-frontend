import { useEffect, useMemo, useState, type ComponentType } from "react"
import { useQuery } from "@tanstack/react-query"
import { getCompanyPublic } from "@/entities/Profile/Company/model/api/getCompanyPublic"
import type { CompanyPublicResponse } from "@/entities/Profile/Company/model/types/company-public.types"
import { ICONS_BY_LABEL } from "@/widgets/Catalog/Filters/const/iconsByLabel"

export const useCompanyPublicPage = (companyId: string) => {
  const [isRegionsExpanded, setIsRegionsExpanded] = useState(false)
  const { data, isLoading, isError } = useQuery<CompanyPublicResponse>({
    queryKey: ["company-public", companyId],
    queryFn: () => getCompanyPublic(companyId),
    enabled: Boolean(companyId),
    staleTime: 3 * 60 * 1000,
  })

  const company = data?.company
  const services = data?.services ?? []
  const [openSectionIds, setOpenSectionIds] = useState<Set<string>>(new Set())

  const visibleRegions = useMemo(() => {
    const list = company?.regions ?? []
    return isRegionsExpanded ? list : list.slice(0, 3)
  }, [isRegionsExpanded, company?.regions])

  const canShowAllRegions = (company?.regions?.length ?? 0) > 3

  const toggleRegions = () => setIsRegionsExpanded((prev) => !prev)

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

  const iconMap = ICONS_BY_LABEL as Record<string, ComponentType<{ isActive?: boolean }>>

  useEffect(() => {
    if (services.length === 0) return
    setOpenSectionIds((prev) => (prev.size === 0 ? new Set([services[0].category]) : prev))
  }, [services])

  return {
    company,
    isLoading,
    isError,
    regions: visibleRegions,
    canShowAllRegions,
    isRegionsExpanded,
    toggleRegions,
    services,
    openSectionIds,
    toggleSection,
    iconMap,
  }
}
