'use client';

import Link from "next/link";
import { SortIcon } from "@/shared/ui";
import { FilterMenu } from "@/shared/ui/FilterMenu/ui/FilterMenu";
import { useContestStatusTabs } from "../model/useContestStatusTabs";

type ContestStatusTabsProps = {
    status: "current" | "past";
};

export const ContestStatusTabs = ({ status }: ContestStatusTabsProps) => {
    const { items, selectedItem, isOpen, setIsOpen, handleSelect } = useContestStatusTabs(status);

    return (
        <>
            <div className="relative md:hidden">
                <button
                    type="button"
                    className="flex gap-2 items-center cursor-pointer"
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    <p className="text-secondary font-semibold leading-[130%] text-sm">
                        {selectedItem.title}
                    </p>
                    <SortIcon />
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
                    href="/contests?status=current"
                    className={`rounded-[40px] px-6 py-2 ${status === "current" ? "bg-white text-secondary" : "text-accent-septenary"}`}
                >
                    Текущие
                </Link>
                <Link
                    href="/contests?status=past"
                    className={`rounded-[40px] px-6 py-2 ${status === "past" ? "bg-white text-secondary" : "text-accent-septenary"}`}
                >
                    Прошедшие
                </Link>
            </div>
        </>
    );
};