import type { ComponentType } from "react"
import {
  DesigningIcon,
  GreeningIcon,
  ProductionIcon,
  InstallationIcon,
  SuppliersIcon,
  EducationIcon,
} from "@/shared/ui"

type CatalogIconComponent = ComponentType<{ isActive?: boolean }>

export const ICONS_BY_LABEL: Record<string, CatalogIconComponent> = {
  Проектирование: DesigningIcon,
  Озеленение: GreeningIcon,
  Производство: ProductionIcon,
  "Монтажные работы": InstallationIcon,
  Поставщики: SuppliersIcon,
  Обучение: EducationIcon,
}
