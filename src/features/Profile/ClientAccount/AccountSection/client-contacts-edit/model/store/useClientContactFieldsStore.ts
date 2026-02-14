'use client';

import { create } from "zustand"

export type ContactField = "phone" | "email" | "telegram" | "max"

export const CONTACT_FIELD_LIMITS: Record<ContactField, number> = {
    phone: 1,
    email: 1,
    telegram: 1,
    max: 1,
}

type ClientContactFieldsStore = {
    isPickerOpen: boolean;
    counts: Record<ContactField, number>;
    togglePicker: () => void;
    addField: (type: ContactField) => void;
    setCounts: (counts: Record<ContactField, number>) => void;
}

export const useClientContactFieldsStore = create<ClientContactFieldsStore>((set) => ({
    isPickerOpen: false,
    counts: { phone: 1, email: 1, telegram: 0, max: 0 },
    togglePicker: () => set((state) => ({ isPickerOpen: !state.isPickerOpen })),
    addField: (type) =>
        set((state) => ({
            counts: {
                ...state.counts,
                [type]: Math.min(state.counts[type] + 1, CONTACT_FIELD_LIMITS[type]),
            },
            isPickerOpen: false,
        })),
    setCounts: (counts) =>
        set(() => ({
            counts: {
                phone: Math.min(counts.phone, CONTACT_FIELD_LIMITS.phone),
                email: Math.min(counts.email, CONTACT_FIELD_LIMITS.email),
                telegram: Math.min(counts.telegram, CONTACT_FIELD_LIMITS.telegram),
                max: Math.min(counts.max, CONTACT_FIELD_LIMITS.max),
            },
        })),
}))
