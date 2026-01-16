export type CatalogFilterItem = {
  id: string
  label: string
  isSelected?: boolean
}

export type CatalogFilterSection = {
  id: string
  label: string
  items: CatalogFilterItem[]
}
