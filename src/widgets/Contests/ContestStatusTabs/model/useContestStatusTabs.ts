'use client';

import { useCallback, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const STATUS_ITEMS = [
    { id: 1, title: "Текущие", value: "current" },
    { id: 2, title: "Прошедшие", value: "past" },
] as const;

type ContestStatus = (typeof STATUS_ITEMS)[number]["value"];

function buildStatusUrl(searchParams: URLSearchParams, status: ContestStatus): string {
    const params = new URLSearchParams(searchParams.toString());
    params.set("status", status);
    const query = params.toString();
    return query ? `/contests?${query}` : "/contests";
}

export const useContestStatusTabs = (status: ContestStatus) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isOpen, setIsOpen] = useState(false);
    const selectedItem = STATUS_ITEMS.find((item) => item.value === status) ?? STATUS_ITEMS[0];

    const getStatusHref = useCallback(
        (value: ContestStatus) => buildStatusUrl(searchParams, value),
        [searchParams],
    );

    const handleSelect = (id: number) => {
        const nextItem = STATUS_ITEMS.find((item) => item.id === id);
        if (nextItem) {
            router.push(buildStatusUrl(searchParams, nextItem.value));
        }
        setIsOpen(false);
    };

    return {
        items: STATUS_ITEMS,
        selectedItem,
        isOpen,
        setIsOpen,
        handleSelect,
        getStatusHref,
    };
};