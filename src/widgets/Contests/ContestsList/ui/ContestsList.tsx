'use client';

import { ContestsCard, useContests, CONTESTS_MESSAGES } from "@/entities/Contests"
import { Pagination, usePagination, QueryState } from "@/shared/ui";
import { useContestsStore } from "../model/store/contestsStore";

const ITEMS_PER_PAGE = 12;

export const ContestsList = () => {
    const { currentPage, setCurrentPage } = useContestsStore()
    const { data: contests = [], isLoading, isError } = useContests()
    
    const { paginatedItems: paginatedContests, totalPages } = usePagination({
        items: contests,
        itemsPerPage: ITEMS_PER_PAGE,
        currentPage
    })

    return (
        <QueryState
            isLoading={isLoading}
            isError={isError}
            isEmpty={contests.length === 0}
            loadingMessage={CONTESTS_MESSAGES.loading}
            errorMessage={CONTESTS_MESSAGES.error}
            emptyMessage={CONTESTS_MESSAGES.empty}
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                {paginatedContests.map((contest) => (
                    <ContestsCard key={contest.id} contest={contest} />
                ))}
            </div>
            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            )}
        </QueryState>
    )
}