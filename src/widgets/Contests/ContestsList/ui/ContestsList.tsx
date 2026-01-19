import { ContestItem } from "@/entities/Contests"
import { getContests } from "@/features/Contests";
import { ContestsListClient } from "./ContestsListClient";

interface ContestsListProps {
    currentPage: number
}

export const ContestsList = async ({ currentPage }: ContestsListProps) => {
    const contests: ContestItem[] = await getContests()

    return (
        <ContestsListClient contests={contests} currentPage={currentPage} />
    )
}