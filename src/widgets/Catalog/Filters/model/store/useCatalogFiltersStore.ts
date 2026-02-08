'use client'

import { create } from "zustand"

type SelectedCatalogService = {
  category: string
  service: string
}

type CatalogFiltersStoreState = {
  selectedService: SelectedCatalogService | null
  selectedFilters: SelectedCatalogService[]
  setSelectedService: (value: SelectedCatalogService | null) => void
  clearSelectedService: () => void
  addSelectedFilter: (value: SelectedCatalogService) => void
  removeSelectedFilter: (value: SelectedCatalogService) => void
  toggleSelectedFilter: (value: SelectedCatalogService) => void
  clearSelectedFilters: () => void
}

export const useCatalogFiltersStore = create<CatalogFiltersStoreState>((set) => ({
  selectedService: null,
  selectedFilters: [],
  setSelectedService: (value) => set(() => ({ selectedService: value })),
  clearSelectedService: () => set(() => ({ selectedService: null })),
  addSelectedFilter: (value) =>
    set((state) => {
      const exists = state.selectedFilters.some(
        (item) => item.category === value.category && item.service === value.service,
      )
      return exists ? state : { selectedFilters: [...state.selectedFilters, value] }
    }),
  removeSelectedFilter: (value) =>
    set((state) => ({
      selectedFilters: state.selectedFilters.filter(
        (item) => !(item.category === value.category && item.service === value.service),
      ),
    })),
  toggleSelectedFilter: (value) =>
    set((state) => {
      const exists = state.selectedFilters.some(
        (item) => item.category === value.category && item.service === value.service,
      )
      if (exists) {
        return {
          selectedFilters: state.selectedFilters.filter(
            (item) => !(item.category === value.category && item.service === value.service),
          ),
        }
      }
      return { selectedFilters: [...state.selectedFilters, value] }
    }),
  clearSelectedFilters: () => set(() => ({ selectedFilters: [] })),
}))
