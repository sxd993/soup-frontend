'use client';

import { create } from "zustand";
import { TIME_BADGES } from "../const/timeBadges";

interface TimeFilterStoreState {
    isOpen: boolean;
    setOpen: (value: boolean) => void;
    toggleOpen: () => void;
    selectedTimeId: number;
    setSelectedTime: (id: number) => void;
}

export const useTimeFilterStore = create<TimeFilterStoreState>((set) => ({
    isOpen: false,
    setOpen: (value) => set(() => ({ isOpen: value })),
    toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
    selectedTimeId: TIME_BADGES[0]?.id ?? 0,
    setSelectedTime: (id) => set(() => ({ selectedTimeId: id })),
}));