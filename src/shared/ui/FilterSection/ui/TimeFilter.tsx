'use client';

import { useTimeFilters } from "../model/hooks/useFilters"
import { SortIcon } from "@/shared/ui"
import { FilterMenu } from "./FilterMenu"
import { TIME_BADGES } from "../model/const/timeBadges";


export const TimeFilter = () => {
    const {
        isTimeFilterOpen,
        toggleTimeFilter,
        setTimeFilterOpen,
        selectedTimeId,
        setSelectedTime
    } = useTimeFilters()
    const selectedTime = TIME_BADGES.find((badge) => badge.id === selectedTimeId)

    return (
        <div className="relative">
            <button
                type="button"
                className="flex gap-2 items-center"
                aria-expanded={isTimeFilterOpen}
                onClick={toggleTimeFilter}
            >
                <p className="text-secondary font-semibold leading-[130%] text-sm">
                    {selectedTime?.title ?? "за все время"}
                </p>
                <SortIcon />
            </button>

            {isTimeFilterOpen && (
                <FilterMenu
                    items={TIME_BADGES}
                    selectedId={selectedTimeId}
                    className="-right-20"
                    onSelect={(id) => {
                        setSelectedTime(id)
                        setTimeFilterOpen(false)
                    }}
                />
            )}
        </div>
    )
}