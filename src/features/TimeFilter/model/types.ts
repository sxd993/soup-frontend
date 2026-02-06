export type TimeFilterValue = "week" | "month" | "all";

export const TIME_PARAM_DEFAULT: TimeFilterValue = "all";

export function parseTimeParam(value: string | null): TimeFilterValue {
    if (value === "week" || value === "month" || value === "all") {
        return value;
    }
    return TIME_PARAM_DEFAULT;
}
