'use client';

import { usePlaceFilters } from "../model/hooks/useFilters"
import { SortIcon } from "@/shared"
import { PLACE_BADGES } from "../model/const/placeBadges"
import { FilterMenu } from "./FilterMenu"

export const PlaceFilter = () => {
    const { isPlaceFilterOpen, togglePlaceFilter, setPlaceFilterOpen, selectedPlaceId, setSelectedPlace } =
        usePlaceFilters()
    const selectedPlace = PLACE_BADGES.find((badge) => badge.id === selectedPlaceId)

    return (
        <div className="relative">
            {/* Мобильная версия - выпадающее меню */}
            <button
                type="button"
                className="flex md:hidden gap-2 items-center"
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

            {/* Десктопная версия - бейджи */}
            <div className="hidden md:flex flex-row gap-4">
                {PLACE_BADGES.map((badge) => {
                    const isSelected = selectedPlaceId === badge.id
                    return (
                        <button
                            key={badge.id}
                            type="button"
                            onClick={() => setSelectedPlace(badge.id)}
                            className={`w-fit px-4 py-1 text-[11px] font-medium transition-all duration-300 text-secondary rounded-full ${
                                isSelected
                                    ? "bg-accent-quaternary"
                                    : "bg-white hover:bg-accent-quaternary"
                            }`}
                        >
                            {badge.title}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}