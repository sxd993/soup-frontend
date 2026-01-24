'use client'

import { create } from 'zustand'

type HeaderStoreState = {
  isMenuOpen: boolean
  isSearchOpen: boolean
  isDesktopSearchOpen: boolean
  openMenu: () => void
  closeMenu: () => void
  openSearch: () => void
  closeSearch: () => void
  openDesktopSearch: () => void
  closeDesktopSearch: () => void
}

export const useHeaderStore = create<HeaderStoreState>((set) => ({
  isMenuOpen: false,
  isSearchOpen: false,
  isDesktopSearchOpen: false,
  openMenu: () => set(() => ({ isMenuOpen: true })),
  closeMenu: () => set(() => ({ isMenuOpen: false })),
  openSearch: () => set(() => ({ isSearchOpen: true })),
  closeSearch: () => set(() => ({ isSearchOpen: false })),
  openDesktopSearch: () => set(() => ({ isDesktopSearchOpen: true })),
  closeDesktopSearch: () => set(() => ({ isDesktopSearchOpen: false })),
}))
