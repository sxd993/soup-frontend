'use client';

import { SectionTitle, ViewAllButton, QueryState } from "@/shared/ui"
import { ContestsCard, useContests, CONTESTS_MESSAGES } from "@/entities/Contests"

export const ContestsSection = () => {
    const { data: contests = [], isLoading, isError } = useContests()
    const lastThreeContests = contests.slice(-3)

    return (
        <QueryState
            isLoading={isLoading}
            isError={isError}
            isEmpty={!isLoading && lastThreeContests.length === 0}
            loadingMessage={CONTESTS_MESSAGES.loading}
            errorMessage={CONTESTS_MESSAGES.error}
            emptyMessage={CONTESTS_MESSAGES.empty}
        >
            <section className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-25 mb-10">
                    <SectionTitle title="Конкурсы" />
                    <div className="hidden md:block">
                        <ViewAllButton href="/contests" text="Смотреть все" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
                    {lastThreeContests.map((contest) => (
                        <ContestsCard key={contest.id} contest={contest} />
                    ))}
                </div>

                <div className="md:hidden">
                    <ViewAllButton href="/contests" text="Смотреть все" />
                </div>
            </section>
        </QueryState>
    )
}