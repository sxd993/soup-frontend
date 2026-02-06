import type { TimeFilterValue } from "../types";

export interface TimeBadge {
    id: number;
    value: TimeFilterValue;
    title: string;
}

export const TIME_BADGES: TimeBadge[] = [
    { id: 1, value: "week", title: "За неделю" },
    { id: 2, value: "month", title: "За месяц" },
    { id: 3, value: "all", title: "За всё время" },
];
