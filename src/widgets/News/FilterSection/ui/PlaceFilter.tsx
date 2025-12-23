'use client';

import { usePlaceFilters } from "../model/hooks/useFilters"
import { SortIcon } from "@/shared/ui/icons/SortIcon"
import { PLACE_BADGES } from "../model/const/placeBadges"
import { FilterMenu } from "./FilterMenu"

export const PlaceFilter = () => {
    const { isPlaceFilterOpen, togglePlaceFilter, setPlaceFilterOpen, selectedPlaceId, setSelectedPlace } =
        usePlaceFilters()
    const selectedPlace = PLACE_BADGES.find((badge) => badge.id === selectedPlaceId)

    return (
        <div className="relative">
            <button
                type="button"
                className="flex lg:hidden gap-2 items-center"
                aria-expanded={isPlaceFilterOpen}
                onClick={togglePlaceFilter}
            >
                <p className="text-secondary font-semibold leading-[130%] text-sm">
                    {selectedPlace?.title ?? "Парки"}
                </p>
                <SortIcon />
            </button>

            {isPlaceFilterOpen && (
                <FilterMenu
                    items={PLACE_BADGES}
                    selectedId={selectedPlaceId}
                    className="left-0 right-auto"
                    onSelect={(id) => {
                        setSelectedPlace(id)
                        setPlaceFilterOpen(false)
                    }}
                />
            )}
        </div>
    )
}
