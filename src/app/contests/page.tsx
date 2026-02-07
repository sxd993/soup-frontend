import { Suspense } from "react";
import { SectionTitle, Button } from "@/shared/ui";
import { TimeFilterWithUrl, parseTimeParam } from "@/features/TimeFilter";
import { ContestSearchInput } from "@/widgets/Contests/SearchSection";
import { ContestStatusTabs } from "@/widgets/Contests/ContestStatusTabs";
import { ContestsList } from "@/widgets/Contests/ContestsList";

export default async function ContestsPage() {
    const currentPage = 1;
    const contestStatus = "current";
    const time = parseTimeParam(null);

    return (
        <Suspense fallback={null}>
            <div className="flex flex-col mt-15">

                {/* Заголовок секции */}
                <SectionTitle title="Конкурсы" className="mb-5" />

                {/* md+ Секция поиска */}
                <div className="flex items-center gap-4">
                    <div className="flex-1 hidden md:block">
                        <ContestSearchInput />
                    </div>
                    <Button className="hidden md:block cursor-pointer">
                        Найти
                    </Button>
                </div>

                {/* Вкладки и фильтр по дате */}
                <div className="w-full relative mt-7 mb-5 md:mt-10">
                    <div className="flex justify-between items-center gap-4">
                        <ContestStatusTabs status={contestStatus} />
                        <TimeFilterWithUrl />
                    </div>
                </div>

                {/* Список конкурсов */}
                <ContestsList currentPage={currentPage} status={contestStatus} time={time} />
            </div>
        </Suspense>
    );
}
