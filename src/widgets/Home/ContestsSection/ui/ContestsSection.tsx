import { SectionTitle, ViewAllButton } from "@/shared/ui"
import { CONTESTS, ContestsCard } from "@/entities/Contests"

export const ContestsSection = () => {
    const lastThreeContests = CONTESTS.slice(-3)

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
                    <ContestsCard key={contest.title} contest={contest} />
                ))}
            </div>

            <div className="md:hidden">
                <ViewAllButton href="/contests" text="Смотреть все" />
            </div>
        </section>
    )
}
