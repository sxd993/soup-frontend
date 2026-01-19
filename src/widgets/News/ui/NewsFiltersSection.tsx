'use client';

import { TimeFilter } from "@/features/TimeFilter";
import { BadgeFilter } from "./BadgeFilter";

export const NewsFiltersSection = () => {
    return (
        <div className="w-full">
            <div className="flex justify-between items-center gap-4">
                <BadgeFilter />
                <TimeFilter />
            </div>
        </div>
    );
};