"use client";

import { create } from "zustand";

type RespondToOrderModalStore = {
  isOpen: boolean;
  isSuccess: boolean;
  openModal: () => void;
  closeModal: () => void;
  showSuccess: () => void;
  reset: () => void;
};

export const useRespondToOrderModalStore = create<RespondToOrderModalStore>(
  (set) => ({
    isOpen: false,
    isSuccess: false,
    openModal: () => set(() => ({ isOpen: true })),
    closeModal: () => set(() => ({ isOpen: false })),
    showSuccess: () => set(() => ({ isSuccess: true })),
    reset: () => set(() => ({ isOpen: false, isSuccess: false })),
  }),
);

