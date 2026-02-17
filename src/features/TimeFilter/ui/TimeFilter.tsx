"use client";

import { useState } from "react";
import { SortIcon } from "@/shared/ui";
import { FilterMenu } from "@/shared/ui/FilterMenu/ui/FilterMenu";
import { TIME_BADGES } from "../model/const/timeBadges";
import type { TimeFilterValue } from "../model/types";

type TimeFilterProps = {
    value: TimeFilterValue;
    onChange: (next: TimeFilterValue) => void;
};

export const TimeFilter = ({ value, onChange }: TimeFilterProps) => {
    const [isOpen, setOpen] = useState(false);
    const selectedBadge = TIME_BADGES.find((b) => b.value === value) ?? TIME_BADGES[2];

    return (
        <div className="relative">
            {/* Выпадающий фильтр по времени */}
            <button
                type="button"
                className="flex cursor-pointer items-center gap-2"
                aria-expanded={isOpen}
                onClick={() => setOpen((prev) => !prev)}
            >
                {selectedBadge.title}
                <span className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}>
                    <SortIcon />
                </span>
            </button>

            {isOpen && (
                <FilterMenu
                    items={TIME_BADGES.map((b) => ({ id: b.id, title: b.title }))}
                    selectedId={selectedBadge.id}
                    className="-right-20"
                    onSelect={(id) => {
                        const badge = TIME_BADGES.find((b) => b.id === id);
                        if (badge) onChange(badge.value);
                        setOpen(false);
                    }}
                />
            )}
        </div>
    );
};
