'use client'

import { create } from "zustand"

type SelectedCatalogService = {
  category: string
  service: string
}

type CatalogFiltersStoreState = {
  selectedService: SelectedCatalogService | null
  selectedFilters: SelectedCatalogService[]
  selectedRegions: string[]
  setSelectedService: (value: SelectedCatalogService | null) => void
  clearSelectedService: () => void
  addSelectedFilter: (value: SelectedCatalogService) => void
  removeSelectedFilter: (value: SelectedCatalogService) => void
  toggleSelectedFilter: (value: SelectedCatalogService) => void
  clearSelectedFilters: () => void
  addSelectedRegion: (label: string) => void
  removeSelectedRegion: (label: string) => void
  toggleSelectedRegion: (label: string) => void
  clearSelectedRegions: () => void
}

export const useCatalogFiltersStore = create<CatalogFiltersStoreState>((set) => ({
  selectedService: null,
  selectedFilters: [],
  selectedRegions: [],
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
  addSelectedRegion: (label) =>
    set((state) => {
      const exists = state.selectedRegions.includes(label)
      return exists ? state : { selectedRegions: [...state.selectedRegions, label] }
    }),
  removeSelectedRegion: (label) =>
    set((state) => ({
      selectedRegions: state.selectedRegions.filter((item) => item !== label),
    })),
  toggleSelectedRegion: (label) =>
    set((state) => {
      const exists = state.selectedRegions.includes(label)
      if (exists) {
        return { selectedRegions: state.selectedRegions.filter((item) => item !== label) }
      }
      return { selectedRegions: [...state.selectedRegions, label] }
    }),
  clearSelectedRegions: () => set(() => ({ selectedRegions: [] })),
}))
