import { useFilterStore } from "../store/filterStore"

export const useFilters = () => {
    const isPlaceFilterOpen = useFilterStore((state) => state.isPlaceFilterOpen)
    const isTimeFilterOpen = useFilterStore((state) => state.isTimeFilterOpen)
    const togglePlaceFilter = useFilterStore((state) => state.togglePlaceFilter)
    const toggleTimeFilter = useFilterStore((state) => state.toggleTimeFilter)

    return {
        isPlaceFilterOpen,
        isTimeFilterOpen,
        togglePlaceFilter,
        toggleTimeFilter
    }
}
