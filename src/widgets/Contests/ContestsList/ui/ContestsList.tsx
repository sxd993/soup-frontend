'use client';

import { CONTESTS, ContestsCard } from "@/entities/Contests"
import { Pagination, usePagination } from "@/shared/ui";
import { useContestsStore } from "../model/store/contestsStore";

const ITEMS_PER_PAGE = 12;

export const ContestsList = () => {
    const { currentPage, setCurrentPage } = useContestsStore()
    const { paginatedItems: paginatedContests, totalPages } = usePagination({
        items: CONTESTS,
        itemsPerPage: ITEMS_PER_PAGE,
        currentPage
    })

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                {paginatedContests.map((contest) => (
                    <ContestsCard key={contest.title} contest={contest} />
                ))}
            </div>
            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            )}
        </>
    )
}