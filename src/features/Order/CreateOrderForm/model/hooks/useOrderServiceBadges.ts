import { useMemo } from "react"
import { getUniqueBadges, useContractors } from "@/entities/Contractors"

export const useOrderServiceBadges = () => {
  const { data: contractors = [], isLoading, isError } = useContractors()
  const badges = useMemo(() => getUniqueBadges(contractors), [contractors])
  return { badges, isLoading, isError }
}
