"use client";

import { create } from "zustand";

type SelectedFilter = {
  category: string;
  service: string;
};

type OrderFindFiltersStoreState = {
  selectedFilters: SelectedFilter[];
  selectedRegions: string[];
  addSelectedFilter: (value: SelectedFilter) => void;
  removeSelectedFilter: (value: SelectedFilter) => void;
  toggleSelectedFilter: (value: SelectedFilter) => void;
  clearSelectedFilters: () => void;
  toggleSelectedRegion: (label: string) => void;
  clearSelectedRegions: () => void;
};

export const useOrderFindFiltersStore = create<OrderFindFiltersStoreState>((set) => ({
  selectedFilters: [],
  selectedRegions: [],
  addSelectedFilter: (value) =>
    set((state) => {
      const exists = state.selectedFilters.some(
        (item) => item.category === value.category && item.service === value.service,
      );
      return exists ? state : { selectedFilters: [...state.selectedFilters, value] };
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
      );
      if (exists) {
        return {
          selectedFilters: state.selectedFilters.filter(
            (item) => !(item.category === value.category && item.service === value.service),
          ),
        };
      }
      return { selectedFilters: [...state.selectedFilters, value] };
    }),
  clearSelectedFilters: () => set(() => ({ selectedFilters: [] })),
  toggleSelectedRegion: (label) =>
    set((state) => {
      const exists = state.selectedRegions.includes(label);
      if (exists) {
        return { selectedRegions: state.selectedRegions.filter((item) => item !== label) };
      }
      return { selectedRegions: [...state.selectedRegions, label] };
    }),
  clearSelectedRegions: () => set(() => ({ selectedRegions: [] })),
}));
