'use client';

import { SectionTitle } from "@/shared/ui/SectionTitle";
import { ContestSearchInput, ContestsList } from "@/widgets/Contests";
import { Button } from "@/shared/ui/Button";
import { TimeFilter } from "@/shared/ui/FilterSection/ui/TimeFilter";

export default function ContestsPage() {
    return (
        <div className="flex flex-col mt-15">
            <SectionTitle title="Конкурсы" className="mb-5" />
            <div className="flex items-center gap-4 mb-10 mt-4">
                <div className="flex-1">
                    <ContestSearchInput />
                </div>
                <Button text="Найти" />
            </div>
            <div className="flex justify-end mb-3">
                <TimeFilter />
            </div>
            <ContestsList />
        </div>
    )
}