import { parseTimeParam } from "@/features/TimeFilter";
import type { TimeFilterValue } from "@/features/TimeFilter";

type SearchParams = { [key: string]: string | string[] | undefined };

export type ContestsPageParams = {
    time: TimeFilterValue;
    status: "current" | "past";
};

export function parseContestsPageSearchParams(params: SearchParams | null): ContestsPageParams {
    const timeParam = typeof params?.time === "string" ? params.time : null;
    const statusParam = typeof params?.status === "string" ? params.status : null;

    return {
        time: parseTimeParam(timeParam),
        status: statusParam === "past" ? "past" : "current",
    };
}
