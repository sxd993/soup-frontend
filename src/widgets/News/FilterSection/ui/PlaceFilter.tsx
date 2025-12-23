'use client';

import { useFilters } from "../model/hooks/useFilters"
import { SortIcon } from "@/shared/ui/icons/SortIcon"

const iconRotationClass = (isOpen: boolean) => `transition-transform ${isOpen ? "rotate-180" : ""}`

export const PlaceFilter = () => {
    const { isPlaceFilterOpen, togglePlaceFilter } = useFilters()

    return (
        <div>
            <button
                type="button"
                className="flex lg:hidden gap-2 items-center"
                aria-expanded={isPlaceFilterOpen}
                onClick={togglePlaceFilter}
            >
                <p className="text-secondary font-semibold leading-[130%] text-sm">Парки</p>
                <SortIcon className={iconRotationClass(isPlaceFilterOpen)} />
            </button>
        </div>
    )
}
