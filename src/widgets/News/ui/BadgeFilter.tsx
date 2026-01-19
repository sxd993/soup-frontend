'use client';

import { useState } from "react";
import { StateProvider } from "@/app/providers/State/StateProvider";
import { SortIcon } from "@/shared/ui";
import { FilterMenu } from "@/shared/ui/FilterMenu/ui/FilterMenu";
import { useNewsBadgeFilterState } from "../model/hooks/useNewsBadgeFilterState";

export const BadgeFilter = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const { badges, selectedBadge, setSelectedBadge } = useNewsBadgeFilterState();

    // Список бейджей строится из доступных новостей.
    const items = [
        { id: 0, title: "Все", value: null as string | null },
        ...badges.map((badge, index) => ({
            id: index + 1,
            title: badge,
            value: badge,
        })),
    ];

    const selectedItem = items.find((item) => item.value === selectedBadge) ?? items[0];

    // Выбор бейджа синхронизируется в сторе.
    const handleSelect = (id: number) => {
        const nextItem = items.find((item) => item.id === id);
        setSelectedBadge(nextItem?.value ?? null);
        setMenuOpen(false);
    };

    return (
        <div className="relative">
            <StateProvider
                isLoading={false}
                isError={false}
                isEmpty={badges.length === 0}
                emptyMessage="Фильтры пока отсутствуют"
            >
                {/* Мобильная версия - выпадающее меню */}
                <button
                    type="button"
                    className="flex md:hidden gap-2 items-center cursor-pointer"
                    aria-expanded={isMenuOpen}
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    <p className="text-secondary font-semibold leading-[130%] text-sm">
                        {selectedItem.title}
                    </p>
                    <SortIcon />
                </button>

                {isMenuOpen && (
                    <FilterMenu
                        items={items}
                        selectedId={selectedItem.id}
                        className="left-0 right-auto"
                        onSelect={handleSelect}
                    />
                )}

                {/* Десктопная версия - бейджи */}
                <div className="hidden md:flex flex-row gap-4">
                    {items.map((item) => {
                        const isSelected = selectedItem.id === item.id;
                        return (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => setSelectedBadge(item.value)}
                                className={`w-fit px-4 py-1 text-[11px] font-medium transition-all duration-300 text-secondary rounded-full cursor-pointer ${
                                    isSelected
                                        ? "bg-accent-quaternary"
                                        : "bg-white hover:bg-accent-quaternary"
                                }`}
                            >
                                {item.title}
                            </button>
                        );
                    })}
                </div>
            </StateProvider>
        </div>
    );
};