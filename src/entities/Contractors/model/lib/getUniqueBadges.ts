import type { ContractorsTypes } from "../types/contractors.types"

export const getUniqueBadges = (contractors: ContractorsTypes[]): string[] => {
  const all = contractors.flatMap((contractor) =>
    contractor.subcategories.map((subcategory) => subcategory.title),
  )
  return [...new Set(all)].sort((a, b) => a.localeCompare(b, "ru", { sensitivity: "base" }))
}
