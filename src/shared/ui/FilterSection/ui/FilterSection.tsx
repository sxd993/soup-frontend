'use client';

import { PlaceFilter } from "./PlaceFilter"
import { TimeFilter } from "./TimeFilter"

export const FilterSection = () => {
    return (
        <div className="w-full">
            <div className="flex justify-between items-center gap-4">

                {/* Фильтры по месту */}
                <PlaceFilter />
                {/* Фильтры по времени */}
                <TimeFilter />

            </div>
        </div>
    )
}