'use client';

import { useFilters } from "../model/hooks/useFilters"
import { SortIcon } from "@/shared/ui/icons/SortIcon"

const iconRotationClass = (isOpen: boolean) => `transition-transform ${isOpen ? "rotate-180" : ""}`

export const TimeFilter = () => {
    const { isTimeFilterOpen, toggleTimeFilter } = useFilters()

    return (
        <div>
            <button
                type="button"
                className="flex gap-2 items-center"
                aria-expanded={isTimeFilterOpen}
                onClick={toggleTimeFilter}
            >
                <p className="text-secondary font-semibold leading-[130%] text-sm">за все время</p>
                <SortIcon className={iconRotationClass(isTimeFilterOpen)} />
            </button>
        </div>
    )
}
