import { create } from "zustand"

interface FilterStoreState {
    isPlaceFilterOpen: boolean
    isTimeFilterOpen: boolean
    setPlaceFilterOpen: (value: boolean) => void
    setTimeFilterOpen: (value: boolean) => void
    togglePlaceFilter: () => void
    toggleTimeFilter: () => void
}

export const useFilterStore = create<FilterStoreState>((set) => ({
    isPlaceFilterOpen: false,
    isTimeFilterOpen: false,
    setPlaceFilterOpen: (value) => set(() => ({ isPlaceFilterOpen: value })),
    setTimeFilterOpen: (value) => set(() => ({ isTimeFilterOpen: value })),
    togglePlaceFilter: () => set((state) => ({ isPlaceFilterOpen: !state.isPlaceFilterOpen })),
    toggleTimeFilter: () => set((state) => ({ isTimeFilterOpen: !state.isTimeFilterOpen }))
}))
