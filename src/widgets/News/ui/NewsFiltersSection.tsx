"use client";

import { TimeFilter, useTimeQueryParam } from "@/features/TimeFilter";
import { BadgeFilter } from "./BadgeFilter";

export const NewsFiltersSection = () => {
    const [time, setTime] = useTimeQueryParam();
    return (
        <div className="w-full relative z-20">
            <div className="flex justify-between items-center gap-4">
                <BadgeFilter />
                <TimeFilter value={time} onChange={setTime} />
            </div>
        </div>
    );
};