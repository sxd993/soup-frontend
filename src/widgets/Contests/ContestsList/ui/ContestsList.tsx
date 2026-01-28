import { ContestItem, getCurrentContests, getPastContests } from "@/entities/Contests"
import { ContestsListClient } from "./ContestsListClient";

interface ContestsListProps {
    currentPage: number
    status?: "current" | "past"
}

export const ContestsList = async ({ currentPage, status = "current" }: ContestsListProps) => {
    const contests: ContestItem[] =
        status === "past" ? await getPastContests() : await getCurrentContests()

    return (
        <ContestsListClient contests={contests} currentPage={currentPage} />
    )
}