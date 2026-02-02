'use client'

import { create } from "zustand"

type SelectedCatalogService = {
  category: string
  service: string
}

type CatalogFiltersStoreState = {
  selectedService: SelectedCatalogService | null
  setSelectedService: (value: SelectedCatalogService | null) => void
  clearSelectedService: () => void
}

export const useCatalogFiltersStore = create<CatalogFiltersStoreState>((set) => ({
  selectedService: null,
  setSelectedService: (value) => set(() => ({ selectedService: value })),
  clearSelectedService: () => set(() => ({ selectedService: null })),
}))
