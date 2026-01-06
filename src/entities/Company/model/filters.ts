import type { CatalogFilterItem } from "./types"

export const REGION_FILTERS: CatalogFilterItem[] = [
  { id: "sverdlovsk", label: "Свердловская область", isSelected: true },
  { id: "chelyabinsk", label: "Челябинская область" },
  { id: "perm", label: "Пермский край" },
]

export const ACTIVITY_FILTERS: CatalogFilterItem[] = [
  { id: "architecture", label: "архитектура" },
  { id: "improvement", label: "благоустройство" },
  { id: "greening", label: "озеленение", isSelected: true },
  { id: "interiors", label: "интерьеры" },
  { id: "engineering", label: "инженерное проектирование" },
  { id: "networks", label: "сети", isSelected: true },
]

export const CATEGORY_FILTERS: CatalogFilterItem[] = [
  { id: "design", label: "Проектирование" },
  { id: "greening", label: "Озеленение" },
  { id: "production", label: "Производство" },
  { id: "installation", label: "Монтажные работы" },
  { id: "suppliers", label: "Поставщики" },
  { id: "education", label: "Обучение" },
]
