'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

const STATUS_ITEMS = [
    { id: 1, title: "Текущие", value: "current" },
    { id: 2, title: "Прошедшие", value: "past" },
] as const;

type ContestStatus = (typeof STATUS_ITEMS)[number]["value"];

export const useContestStatusTabs = (status: ContestStatus) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const selectedItem = STATUS_ITEMS.find((item) => item.value === status) ?? STATUS_ITEMS[0];

    const handleSelect = (id: number) => {
        const nextItem = STATUS_ITEMS.find((item) => item.id === id);
        if (nextItem) {
            router.push(`/contests?status=${nextItem.value}`);
        }
        setIsOpen(false);
    };

    return {
        items: STATUS_ITEMS,
        selectedItem,
        isOpen,
        setIsOpen,
        handleSelect,
    };
};