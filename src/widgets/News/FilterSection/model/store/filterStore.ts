'use client';

import { create } from "zustand"
import { PLACE_BADGES } from "../const/placeBadges"
import { TIME_BADGES } from "../const/timeBadges";

interface FilterStoreState {
    isPlaceFilterOpen: boolean
    isTimeFilterOpen: boolean
    setPlaceFilterOpen: (value: boolean) => void
    setTimeFilterOpen: (value: boolean) => void
    togglePlaceFilter: () => void
    toggleTimeFilter: () => void
    selectedPlaceId: number
    selectedTimeId: number
    setSelectedPlace: (id: number) => void
    setSelectedTime: (id: number) => void
}

export const useFilterStore = create<FilterStoreState>((set) => ({
    isPlaceFilterOpen: false,
    isTimeFilterOpen: false,
    setPlaceFilterOpen: (value) => set(() => ({ isPlaceFilterOpen: value })),
    setTimeFilterOpen: (value) => set(() => ({ isTimeFilterOpen: value })),
    togglePlaceFilter: () => set((state) => ({ isPlaceFilterOpen: !state.isPlaceFilterOpen })),
    toggleTimeFilter: () => set((state) => ({ isTimeFilterOpen: !state.isTimeFilterOpen })),
    selectedPlaceId: PLACE_BADGES[0]?.id ?? 0,
    selectedTimeId: TIME_BADGES[0]?.id ?? 0,
    setSelectedPlace: (id) => set(() => ({ selectedPlaceId: id })),
    setSelectedTime: (id) => set(() => ({ selectedTimeId: id }))
}))
