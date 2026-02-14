import { useMemo } from "react"
import { useContractors } from "@/entities/Contractors"
import type { CatalogFilterSection } from "../types/catalog-filters.types"

const mapContractorsToSections = (contractors: { title: string; badges: string[] }[]): CatalogFilterSection[] =>
  contractors
    .map<CatalogFilterSection>((contractor) => ({
      id: contractor.title,
      label: contractor.title,
      items: [...contractor.badges]
        .sort((a, b) => a.localeCompare(b, "ru", { sensitivity: "base" }))
        .map((badge) => ({
          id: `${contractor.title}-${badge}`,
          label: badge,
        })),
    }))
    .sort((a, b) => a.label.localeCompare(b.label, "ru", { sensitivity: "base" }))

export const useCatalogFiltersData = () => {
  const { data: contractors = [], isLoading, isError } = useContractors()
  const data = useMemo(() => mapContractorsToSections(contractors), [contractors])
  return { data, isLoading, isError }
}
