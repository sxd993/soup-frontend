'use client';

import { create } from "zustand";

type NewsBadgeStoreState = {
    badges: string[];
    selectedBadge: string | null;
    setBadges: (badges: string[]) => void;
    setSelectedBadge: (badge: string | null) => void;
};

export const useNewsBadgeStore = create<NewsBadgeStoreState>((set) => ({
    badges: [],
    selectedBadge: null,
    setBadges: (badges) => set(() => ({ badges })),
    setSelectedBadge: (badge) => set(() => ({ selectedBadge: badge })),
}));