"use client";

import { useEffect } from "react";
import { TimeFilter, useTimeQueryParam } from "@/features/TimeFilter";
import { BadgeFilter } from "./BadgeFilter";
import { useNewsBadgeFilterState } from "../model/hooks/useNewsBadgeFilterState";

type NewsFiltersSectionProps = {
    badges: string[];
};

export const NewsFiltersSection = ({ badges }: NewsFiltersSectionProps) => {
    const [time, setTime] = useTimeQueryParam();
    const { setBadges } = useNewsBadgeFilterState();

    useEffect(() => {
        setBadges(badges);
    }, [badges, setBadges]);

    return (
        <div className="w-full relative z-20">
            <div className="flex justify-between items-center gap-4">
                <BadgeFilter />
                <TimeFilter value={time} onChange={setTime} />
            </div>
        </div>
    );
};