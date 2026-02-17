"use client";

import { StateProvider } from "@/app/providers/State/StateProvider";
import { SortIcon } from "@/shared/ui";
import { FilterMenu } from "@/shared/ui/FilterMenu/ui/FilterMenu";
import { useBadgeFilter } from "../model/hooks/useBadgeFilter";
import { BadgeFilterSkeleton } from "./BadgeFilterSkeleton";

export const BadgeFilter = () => {
    const {
        isMenuOpen,
        toggleMenu,
        items,
        selectedItem,
        handleSelect,
        handleBadgeSelect,
        isEmpty,
        isLoading,
    } = useBadgeFilter();

    return (
        <div className="relative">
            <StateProvider
                isLoading={isLoading}
                isError={false}
                isEmpty={isEmpty}
                loadingComponent={<BadgeFilterSkeleton />}
            >
                <button
                    type="button"
                    className="flex md:hidden cursor-pointer items-center gap-2"
                    aria-expanded={isMenuOpen}
                    onClick={toggleMenu}
                >
                    {selectedItem.title}
                    <span className={`transition-transform ${isMenuOpen ? "rotate-180" : "rotate-0"}`}>
                        <SortIcon />
                    </span>
                </button>

                {isMenuOpen && (
                    <FilterMenu
                        items={items}
                        selectedId={selectedItem.id}
                        className="left-0 right-auto"
                        onSelect={handleSelect}
                    />
                )}

                <div className="hidden md:flex flex-row gap-4">
                    {items.map((item) => {
                        const isSelected = selectedItem.id === item.id;
                        return (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => handleBadgeSelect(item.value)}
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