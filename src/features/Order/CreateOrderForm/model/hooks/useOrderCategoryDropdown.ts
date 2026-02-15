"use client"

import { useFormContext } from "react-hook-form"
import { useDropdown } from "@/shared/hooks"
import type { CreateOrderFormValues } from "../types/types"
import { useOrderCategories } from "./useOrderCategories"

export const useOrderCategoryDropdown = () => {
  const { control } = useFormContext<CreateOrderFormValues>()
  const { categories } = useOrderCategories()
  const dropdown = useDropdown()
  return { control, categories, ...dropdown }
}
