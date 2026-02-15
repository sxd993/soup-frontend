"use client"

import { useQuery } from "@tanstack/react-query"
import { useFormContext } from "react-hook-form"
import { useDropdown } from "@/shared/hooks"
import { fetchRegions } from "@/entities/Regions/model/api/fetchRegions"
import type { CreateOrderFormValues } from "../types/types"

export const useOrderRegionDropdown = () => {
  const { control } = useFormContext<CreateOrderFormValues>()
  const { data: regions = [], isLoading } = useQuery({
    queryKey: ["regions"],
    queryFn: fetchRegions,
    staleTime: 10 * 60 * 1000,
  })
  const dropdown = useDropdown()
  return { control, regions, isLoading, ...dropdown }
}
