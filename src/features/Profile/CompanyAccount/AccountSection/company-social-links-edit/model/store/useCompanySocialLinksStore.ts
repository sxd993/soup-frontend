'use client';

import { create } from "zustand"
import type { SocialField } from "../config/socialLinksConfig"

type CompanySocialLinksStore = {
    isPickerOpen: boolean;
    fields: Record<SocialField, boolean>;
    togglePicker: () => void;
    addField: (type: SocialField) => void;
    setFields: (fields: Partial<Record<SocialField, boolean>>) => void;
}

export const useCompanySocialLinksStore = create<CompanySocialLinksStore>((set) => ({
    isPickerOpen: false,
    fields: {
        website: true,
        vk: false,
        youtube: false,
        whatsapp: false,
        telegram: false,
        yandexDzen: false,
    },
    togglePicker: () => set((state) => ({ isPickerOpen: !state.isPickerOpen })),
    addField: (type) =>
        set((state) => ({
            fields: { ...state.fields, [type]: true },
            isPickerOpen: false,
        })),
    setFields: (fields) =>
        set((state) => ({
            fields: { ...state.fields, ...fields },
        })),
}))
