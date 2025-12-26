'use client';

import { create } from "zustand"

interface ContestsStoreState {
    currentPage: number
    setCurrentPage: (page: number) => void
}

export const useContestsStore = create<ContestsStoreState>((set) => ({
    currentPage: 1,
    setCurrentPage: (page) => set(() => ({ currentPage: page }))
}))