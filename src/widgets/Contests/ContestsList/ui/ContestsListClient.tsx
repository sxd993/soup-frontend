'use client';

import { useMemo } from "react";
import type { ContestItem } from "@/entities/Contests";
import { ContestsCard } from "@/entities/Contests";
import { isWithinTimeRange } from "@/shared/lib";
import { ClientPagination } from "@/features/Pagination";
import { useTimeFilterStore } from "@/features/TimeFilter";

const ITEMS_PER_PAGE = 12;

type ContestsListClientProps = {
    contests: ContestItem[];
    currentPage: number;
};

export const ContestsListClient = ({ contests, currentPage }: ContestsListClientProps) => {
    const selectedTimeId = useTimeFilterStore((state) => state.selectedTimeId);

    const filteredContests = useMemo(() => {
        // Фильтр по времени применяем на клиенте.
        return contests.filter((contest) =>
            isWithinTimeRange(contest.createdAt, selectedTimeId),
        );
    }, [contests, selectedTimeId]);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedContests = filteredContests.slice(startIndex, endIndex);
    const totalPages = Math.ceil(filteredContests.length / ITEMS_PER_PAGE);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                {paginatedContests.map((contest) => (
                    <ContestsCard key={contest.id} contest={contest} />
                ))}
            </div>
            {totalPages > 1 && (
                <ClientPagination currentPage={currentPage} totalPages={totalPages} />
            )}
        </div>
    );
};