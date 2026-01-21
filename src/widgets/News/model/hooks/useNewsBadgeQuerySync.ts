 'use client';

import { useCallback, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useNewsBadgeFilterState } from "./useNewsBadgeFilterState";

export const useNewsBadgeQuerySync = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { selectedBadge, setSelectedBadge } = useNewsBadgeFilterState();

    useEffect(() => {
        const badge = searchParams?.get("badge");
        setSelectedBadge(badge || null);
    }, [searchParams, setSelectedBadge]);

    const handleSelect = useCallback(
        (badge: string | null) => {
            const params = new URLSearchParams(searchParams?.toString());
            if (badge) {
                params.set("badge", badge);
            } else {
                params.delete("badge");
            }
            const query = params.toString();
            router.push(query ? `/news?${query}` : "/news");
            setSelectedBadge(badge);
        },
        [router, searchParams, setSelectedBadge],
    );

    return {
        selectedBadge,
        handleSelect,
    };
};