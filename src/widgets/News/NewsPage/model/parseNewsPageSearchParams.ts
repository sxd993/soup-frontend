import { parseTimeParam } from "@/features/TimeFilter";
import type { TimeFilterValue } from "@/features/TimeFilter";

type SearchParams = { [key: string]: string | string[] | undefined };

export type NewsPageParams = {
    time: TimeFilterValue;
    badge: string | undefined;
};

export function parseNewsPageSearchParams(params: SearchParams | null): NewsPageParams {
    const timeParam = typeof params?.time === "string" ? params.time : null;
    const badgeParam =
        typeof params?.badge === "string" ? params.badge : undefined;

    return {
        time: parseTimeParam(timeParam),
        badge: badgeParam,
    };
}
