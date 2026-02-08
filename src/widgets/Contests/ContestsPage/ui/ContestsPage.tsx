import { SectionTitle, Button } from "@/shared/ui";
import { TimeFilterWithUrl } from "@/features/TimeFilter";
import { ContestSearchInput } from "@/widgets/Contests/SearchSection";
import { ContestStatusTabs } from "@/widgets/Contests/ContestStatusTabs";
import { ContestsList } from "@/widgets/Contests/ContestsList";
import type { TimeFilterValue } from "@/features/TimeFilter";

type ContestsPageProps = {
    time: TimeFilterValue;
    status: "current" | "past";
};

export const ContestsPage = ({ time, status }: ContestsPageProps) => {
    const currentPage = 1;

    return (
        <div className="flex flex-col mt-15">
            <SectionTitle title="Конкурсы" className="mb-5" />

            <div className="flex items-center gap-4">
                <div className="flex-1 hidden md:block">
                    <ContestSearchInput />
                </div>
                <Button className="hidden md:block cursor-pointer">
                    Найти
                </Button>
            </div>

            <div className="w-full relative mt-7 mb-5 md:mt-10">
                <div className="flex justify-between items-center gap-4">
                    <ContestStatusTabs status={status} />
                    <TimeFilterWithUrl />
                </div>
            </div>

            <ContestsList currentPage={currentPage} status={status} time={time} />
        </div>
    );
};
