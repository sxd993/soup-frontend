import { create } from "zustand"

interface FAQStoreState {
    openIndices: Set<number>
    handleToggle: (index: number, isOpen: boolean) => void
    reset: (initialIndex?: number) => void
}

export const useFAQStore = create<FAQStoreState>((set) => ({
    openIndices: new Set([]),
    handleToggle: (index, isOpen) => {
        set((state) => {
            const next = new Set(state.openIndices)
            if (isOpen) {
                next.add(index)
            } else {
                next.delete(index)
            }

            return { openIndices: next }
        })
    },
    reset: (initialIndex?: number) =>
        set(() => ({
            openIndices: typeof initialIndex === "number" ? new Set([initialIndex]) : new Set<number>()
        }))
}))
