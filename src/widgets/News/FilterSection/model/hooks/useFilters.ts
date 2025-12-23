'use client';

import { useMemo } from "react"
import { useFilterStore } from "../store/filterStore"

export const usePlaceFilters = () => {
    const isPlaceFilterOpen = useFilterStore((state) => state.isPlaceFilterOpen)
    const togglePlaceFilter = useFilterStore((state) => state.togglePlaceFilter)
    const setPlaceFilterOpen = useFilterStore((state) => state.setPlaceFilterOpen)
    const selectedPlaceId = useFilterStore((state) => state.selectedPlaceId)
    const setSelectedPlace = useFilterStore((state) => state.setSelectedPlace)

    return useMemo(
        () => ({
            isPlaceFilterOpen,
            togglePlaceFilter,
            setPlaceFilterOpen,
            selectedPlaceId,
            setSelectedPlace
        }),
        [isPlaceFilterOpen, togglePlaceFilter, setPlaceFilterOpen, selectedPlaceId, setSelectedPlace]
    )
}

export const useTimeFilters = () => {
    const isTimeFilterOpen = useFilterStore((state) => state.isTimeFilterOpen)
    const toggleTimeFilter = useFilterStore((state) => state.toggleTimeFilter)
    const setTimeFilterOpen = useFilterStore((state) => state.setTimeFilterOpen)
    const selectedTimeId = useFilterStore((state) => state.selectedTimeId)
    const setSelectedTime = useFilterStore((state) => state.setSelectedTime)

    return useMemo(
        () => ({
            isTimeFilterOpen,
            toggleTimeFilter,
            setTimeFilterOpen,
            selectedTimeId,
            setSelectedTime
        }),
        [isTimeFilterOpen, toggleTimeFilter, setTimeFilterOpen, selectedTimeId, setSelectedTime]
    )
}
