'use client';

import { useState } from "react"
import { SectionTitle } from "@/shared/ui/SectionTitle";
import { ContestSearchInput, ContestsList } from "@/widgets/Contests";
import { Button } from "@/shared/ui/Button";
import { TimeFilter } from "@/shared/ui/FilterSection/ui/TimeFilter";
import { SearchButton } from "@/shared/ui/icons";
import { SearchOverlay } from "@/widgets/Header/ui/SearchOverlay";

export default function ContestsPage() {
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    return (
        <div className="flex flex-col mt-15">
            <SectionTitle title="Конкурсы" className="mb-5" />
            <div className="flex items-center gap-4 md:mt-4">
                <div className="flex-1 hidden md:block">
                    <ContestSearchInput />
                </div>
                <Button text="Найти" className="hidden md:block" />
            </div>
            <div className="flex justify-between md:justify-end items-center gap-4 mb-3 md:mt-10">
                <button
                    type="button"
                    className="block md:hidden rounded-[22px]"
                    aria-label="Открыть поиск"
                    onClick={() => setIsSearchOpen(true)}
                >
                    <SearchButton className="rounded-[22px] w-8 h-8 [&>rect]:fill-white" />
                </button>
                <TimeFilter />
            </div>
            <ContestsList />
            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </div>
    )
}