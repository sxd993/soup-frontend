import type { ComponentType } from "react"
import { ICONS_BY_LABEL } from "@/shared/config/catalogServiceIcons"
import { OrderLocationIcon } from "@/shared/ui"

export const getOrderIcon = (category: string): ComponentType<{ isActive?: boolean }> =>
  ICONS_BY_LABEL[category] ?? OrderLocationIcon
