"use client";

import { useMemo, useState, useCallback } from "react";
import { useNewsBadgeFilterState } from "./useNewsBadgeFilterState";
import { useNewsBadgeQuerySync } from "./useNewsBadgeQuerySync";

type FilterItem = { id: number; title: string; value: string | null };

export const useBadgeFilter = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const { badges, badgesInitialized } = useNewsBadgeFilterState();
    const { selectedBadge, handleSelect: handleBadgeSelect } = useNewsBadgeQuerySync();

    const items: FilterItem[] = useMemo(
        () => [
            { id: 0, title: "Все", value: null },
            ...badges.map((badge, index) => ({
                id: index + 1,
                title: badge,
                value: badge,
            })),
        ],
        [badges],
    );

    const selectedItem = useMemo(
        () => items.find((item) => item.value === selectedBadge) ?? items[0],
        [items, selectedBadge],
    );

    const handleSelect = useCallback(
        (id: number) => {
            const nextItem = items.find((item) => item.id === id);
            handleBadgeSelect(nextItem?.value ?? null);
            setMenuOpen(false);
        },
        [items, handleBadgeSelect],
    );

    const toggleMenu = useCallback(() => {
        setMenuOpen((prev) => !prev);
    }, []);

    return {
        isMenuOpen,
        toggleMenu,
        items,
        selectedItem,
        handleSelect,
        handleBadgeSelect,
        isEmpty: badgesInitialized && badges.length === 0,
    };
};