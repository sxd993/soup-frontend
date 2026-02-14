import type { ContractorsTypes } from "../types/contractors.types"

export const getUniqueBadges = (contractors: ContractorsTypes[]): string[] => {
  const all = contractors.flatMap((c) => c.badges)
  return [...new Set(all)].sort((a, b) => a.localeCompare(b, "ru", { sensitivity: "base" }))
}
