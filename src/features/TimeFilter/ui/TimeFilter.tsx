'use client';

import { SortIcon } from "@/shared/ui";
import { FilterMenu } from "@/shared/ui/FilterMenu/ui/FilterMenu";
import { TIME_BADGES } from "../model/const/timeBadges";
import { useTimeFilter } from "../model/hooks/useTimeFilter";

export const TimeFilter = () => {
    const { isOpen, toggleOpen, setOpen, selectedTimeId, setSelectedTime } = useTimeFilter();
    const selectedTime = TIME_BADGES.find((badge) => badge.id === selectedTimeId);

    return (
        <div className="relative">
            {/* Выпадающий фильтр по времени */}
            <button
                type="button"
                className="flex gap-2 items-center cursor-pointer"
                aria-expanded={isOpen}
                onClick={toggleOpen}
            >
                <p className="text-secondary font-semibold leading-[130%] text-sm">
                    {selectedTime?.title ?? "за все время"}
                </p>
                <span className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}>
                    <SortIcon />
                </span>
            </button>

            {isOpen && (
                <FilterMenu
                    items={TIME_BADGES}
                    selectedId={selectedTimeId}
                    className="-right-20"
                    onSelect={(id) => {
                        setSelectedTime(id);
                        setOpen(false);
                    }}
                />
            )}
        </div>
    );
};