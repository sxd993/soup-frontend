'use client'

import { create } from "zustand"

type CatalogFiltersStoreState = {
  selectedServiceLabel: string | null
  setSelectedServiceLabel: (label: string | null) => void
  clearSelectedServiceLabel: () => void
}

export const useCatalogFiltersStore = create<CatalogFiltersStoreState>((set) => ({
  selectedServiceLabel: null,
  setSelectedServiceLabel: (label) => set(() => ({ selectedServiceLabel: label })),
  clearSelectedServiceLabel: () => set(() => ({ selectedServiceLabel: null })),
}))
