"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { TimeFilterValue } from "../types";
import { parseTimeParam, TIME_PARAM_DEFAULT } from "../types";

export function useTimeQueryParam(): [TimeFilterValue, (next: TimeFilterValue) => void] {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();

    const value = parseTimeParam(searchParams.get("time"));

    const setValue = useCallback(
        (next: TimeFilterValue) => {
            const params = new URLSearchParams(searchParams.toString());
            if (next === TIME_PARAM_DEFAULT) {
                params.delete("time");
            } else {
                params.set("time", next);
            }
            const query = params.toString();
            router.replace(query ? `${pathname}?${query}` : pathname);
        },
        [pathname, router, searchParams],
    );

    return [value, setValue];
}
