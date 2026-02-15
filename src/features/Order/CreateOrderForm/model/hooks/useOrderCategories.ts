"use client"

import { useMemo } from "react"
import { mapContractorsToSections } from "@/shared/lib/catalogFilters"
import { useContractors } from "@/entities/Contractors"

export const useOrderCategories = () => {
  const { data: contractors = [], isLoading, isError } = useContractors()
  const categories = useMemo(() => mapContractorsToSections(contractors), [contractors])
  return { categories, isLoading, isError }
}
