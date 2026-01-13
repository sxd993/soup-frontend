import type { CatalogFilterItem } from "../types/catalog-filters.types"

export const REGION_FILTERS: CatalogFilterItem[] = [
  { id: "sverdlovsk", label: "Свердловская область", isSelected: true },
  { id: "chelyabinsk", label: "Челябинская область" },
  { id: "perm", label: "Пермский край" },
]

export const CATALOG_FILTERS_MESSAGES = {
  loading: "Загружаем фильтры каталога...",
  error: "Не удалось загрузить фильтры каталога",
  empty: "Фильтры пока отсутствуют",
} as const
