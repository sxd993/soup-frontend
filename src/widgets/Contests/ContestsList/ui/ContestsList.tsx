import { ContestsCard, getContests } from "@/entities/Contests"
import type { ContestItem } from "@/entities/Contests/model/types/contest.types"
import { ClientPagination } from "@/shared/ui"

const ITEMS_PER_PAGE = 12;

interface ContestsListProps {
    currentPage: number
}

export const ContestsList = async ({ currentPage }: ContestsListProps) => {
    const contests: ContestItem[] = await getContests()
    
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE
    const paginatedContests = contests.slice(startIndex, endIndex)
    const totalPages = Math.ceil(contests.length / ITEMS_PER_PAGE)

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                {paginatedContests.map((contest) => (
                    <ContestsCard key={contest.id} contest={contest} />
                ))}
            </div>
            {totalPages > 1 && (
                <ClientPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                />
            )}
        </div>
    )
}