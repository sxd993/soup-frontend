'use client';

import { create } from "zustand"

export type ContactField = "phone" | "email"

type CompanyContactFieldsStore = {
    isPickerOpen: boolean;
    counts: Record<ContactField, number>;
    togglePicker: () => void;
    addField: (type: ContactField) => void;
}

export const useCompanyContactFieldsStore = create<CompanyContactFieldsStore>((set) => ({
    isPickerOpen: false,
    counts: { phone: 1, email: 1 },
    togglePicker: () => set((state) => ({ isPickerOpen: !state.isPickerOpen })),
    addField: (type) =>
        set((state) => ({
            counts: {
                ...state.counts,
                [type]: Math.min(state.counts[type] + 1, 2),
            },
            isPickerOpen: false,
        })),
}))
