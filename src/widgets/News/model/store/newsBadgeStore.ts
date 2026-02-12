'use client';

import { create } from "zustand";

type NewsBadgeStoreState = {
    badges: string[];
    selectedBadge: string | null;
    badgesInitialized: boolean;
    setBadges: (badges: string[]) => void;
    setSelectedBadge: (badge: string | null) => void;
};

export const useNewsBadgeStore = create<NewsBadgeStoreState>((set) => ({
    badges: [],
    selectedBadge: null,
    badgesInitialized: false,
    setBadges: (badges) => set(() => ({ badges, badgesInitialized: true })),
    setSelectedBadge: (badge) => set(() => ({ selectedBadge: badge })),
}));