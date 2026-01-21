import { SectionTitle, ViewAllButton } from "@/shared/ui"
import { ContestsCard } from "@/entities/Contests"
import type { ContestItem } from "@/entities/Contests/types/contest.types"
import { getCurrentContests } from "@/features/Contests"

export const ContestsSection = async () => {
    const contests: ContestItem[] = await getCurrentContests()
    const lastThreeContests = contests.slice(0, 3)

    return (
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
    )
}