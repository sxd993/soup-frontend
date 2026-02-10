import type { ComponentType } from "react"
import {
  DesigningIcon,
  GreeningIcon,
  ProductionIcon,
  InstallationIcon,
  SuppliersIcon,
  EducationIcon,
  NetworksIcon,
} from "@/shared/ui"

export type CatalogIconComponent = ComponentType<{ isActive?: boolean }>

export const ICONS_BY_LABEL: Record<string, CatalogIconComponent> = {
  Проектирование: DesigningIcon,
  Озеленение: GreeningIcon,
  Производство: ProductionIcon,
  "Монтажные работы": InstallationIcon,
  Поставщики: SuppliersIcon,
  Обучение: EducationIcon,
  Сети: NetworksIcon,
}

