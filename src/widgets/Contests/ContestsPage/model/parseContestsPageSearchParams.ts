import { parseTimeParam } from "@/features/TimeFilter";
import type { TimeFilterValue } from "@/features/TimeFilter";

type SearchParams = { [key: string]: string | string[] | undefined };

export type ContestsPageParams = {
    time: TimeFilterValue;
    status: "current" | "past";
    currentPage: number;
};

function parsePageParam(value: string | string[] | undefined): number {
    const num = typeof value === "string" ? parseInt(value, 10) : NaN;
    return Number.isNaN(num) || num < 1 ? 1 : num;
}

export function parseContestsPageSearchParams(params: SearchParams | null): ContestsPageParams {
    const timeParam = typeof params?.time === "string" ? params.time : null;
    const statusParam = typeof params?.status === "string" ? params.status : null;
    const pageParam = params?.page;

    return {
        time: parseTimeParam(timeParam),
        status: statusParam === "past" ? "past" : "current",
        currentPage: parsePageParam(pageParam),
    };
}
