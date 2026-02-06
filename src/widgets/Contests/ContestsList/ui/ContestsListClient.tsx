"use client";

import type { ContestItem } from "@/entities/Contests";
import { ContestsCard } from "@/entities/Contests";
import { ClientPagination } from "@/features/Pagination";

const ITEMS_PER_PAGE = 12;

type ContestsListClientProps = {
    contests: ContestItem[];
    currentPage: number;
};

export const ContestsListClient = ({ contests, currentPage }: ContestsListClientProps) => {
    // Пагинация по списку, отфильтрованному по времени на сервере.
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedContests = contests.slice(startIndex, endIndex);
    const totalPages = Math.ceil(contests.length / ITEMS_PER_PAGE);

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