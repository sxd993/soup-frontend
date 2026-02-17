'use client';

import Link from "next/link";
import { SortIcon } from "@/shared/ui";
import { FilterMenu } from "@/shared/ui/FilterMenu/ui/FilterMenu";
import { useContestStatusTabs } from "../model/useContestStatusTabs";

type ContestStatusTabsProps = {
    status: "current" | "past";
};

export const ContestStatusTabs = ({ status }: ContestStatusTabsProps) => {
    const { items, selectedItem, isOpen, setIsOpen, handleSelect, getStatusHref } =
        useContestStatusTabs(status);

    return (
        <>
            <div className="relative md:hidden">
                <button
                    type="button"
                    className="flex cursor-pointer items-center gap-2"
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    {selectedItem.title}
                    <span className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}>
                        <SortIcon />
                    </span>
                </button>
                {isOpen && (
                    <FilterMenu
                        items={items.map(({ id, title }) => ({ id, title }))}
                        selectedId={selectedItem.id}
                        className="left-0 right-auto"
                        onSelect={handleSelect}
                    />
                )}
            </div>

            <div className="hidden md:inline-flex text-[16px] font-semibold">
                <Link
                    href={getStatusHref("current")}
                    className={`rounded-[40px] px-6 py-2 ${status === "current" ? "bg-white text-secondary" : "text-accent-septenary"}`}
                >
                    Текущие
                </Link>
                <Link
                    href={getStatusHref("past")}
                    className={`rounded-[40px] px-6 py-2 ${status === "past" ? "bg-white text-secondary" : "text-accent-septenary"}`}
                >
                    Прошедшие
                </Link>
            </div>
        </>
    );
};