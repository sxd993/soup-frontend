import { useQuery } from "@tanstack/react-query"
import { getContractors } from "@/entities/Contractors"
import type { CatalogFilterSection } from "../types/catalog-filters.types"

export const useCatalogFiltersData = () => {
  return useQuery<CatalogFilterSection[]>({
    queryKey: ["catalog-filters"],
    queryFn: async () => {
      const contractors = await getContractors()
      const sections = contractors.map<CatalogFilterSection>((contractor) => ({
        id: contractor.title,
        label: contractor.title,
        items: [...contractor.badges]
          .sort((a, b) => a.localeCompare(b, "ru", { sensitivity: "base" }))
          .map((badge) => ({
            id: `${contractor.title}-${badge}`,
            label: badge,
          })),
      }))
      return sections.sort((a, b) => a.label.localeCompare(b.label, "ru", { sensitivity: "base" }))
    },
    staleTime: 5 * 60 * 1000,
  })
}
