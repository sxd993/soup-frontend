'use client';

import { PlaceFilter } from "./PlaceFilter"
import { TimeFilter } from "./TimeFilter"

export const FilterSection = () => {
    return (
        <div className="w-full">
            <div className="flex justify-between items-center">

                {/* Бейджы категорий */}
                {/* <div className="hidden flex-row gap-4 lg:flex">
                    {FILTERS_BADGES.map(b => (
                        <Badge key={b.id} badge={b.title} />
                    ))}
                </div> */}
                
                {/* Фильтры по месту */}
                <PlaceFilter />
                {/* Фильтры по времени */}
                <TimeFilter />

            </div>
        </div>
    )
}
