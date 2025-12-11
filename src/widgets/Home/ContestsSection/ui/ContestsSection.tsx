import { SectionTitle, ViewAllButton } from "@/shared/ui"
import { CONTESTS, ContestsCard } from "@/entities"

export const ContestsSection = () => {
    return (
        <section className="space-y-6">
            <div className="flex items-center justify-between mt-25 mb-10">
                <SectionTitle title="Конкурсы" />
                <ViewAllButton href="/contests" text="Смотреть все" />
            </div>

            <div className="grid grid-cols-3 gap-5">
                {CONTESTS.map((contest) => (
                    <ContestsCard key={contest.title} contest={contest} />
                ))}
            </div>
        </section>
    )
}