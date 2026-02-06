import { ContestItem, getCurrentContests, getPastContests } from "@/entities/Contests";
import type { TimeFilterValue } from "@/features/TimeFilter";
import { ContestsListClient } from "./ContestsListClient";

interface ContestsListProps {
    currentPage: number;
    status?: "current" | "past";
    time?: TimeFilterValue;
}

export const ContestsList = async ({
    currentPage,
    status = "current",
    time,
}: ContestsListProps) => {
    const contests: ContestItem[] =
        status === "past"
            ? await getPastContests(time)
            : await getCurrentContests(time);

    return (
        <ContestsListClient contests={contests} currentPage={currentPage} />
    );
};