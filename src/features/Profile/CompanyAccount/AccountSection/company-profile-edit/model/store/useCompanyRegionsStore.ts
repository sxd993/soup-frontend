'use client';

import { create } from "zustand"
import type { RegionItemType } from "../types/RegionItemType"

type CompanyRegionsStoreState = {
    query: string
    selected: RegionItemType[]
    setQuery: (value: string) => void
    addRegion: (region: RegionItemType) => void
    removeRegion: (id: number) => void
    setSelected: (regions: RegionItemType[]) => void
}

export const useCompanyRegionsStore = create<CompanyRegionsStoreState>((set) => ({
    query: "",
    selected: [],
    setQuery: (value) => set(() => ({ query: value })),
    addRegion: (region) =>
        set((state) => {
            if (state.selected.some((item) => item.id === region.id)) {
                return state
            }
            return { selected: [...state.selected, region] }
        }),
    removeRegion: (id) =>
        set((state) => ({
            selected: state.selected.filter((item) => item.id !== id),
        })),
    setSelected: (regions) =>
        set(() => ({
            selected: regions,
        })),
}))
