'use client'

import Link from 'next/link'
import { useState } from 'react'
import { MainIcon, MenuIcon, Person, SearchButton, SearchOverlay } from '@/shared/ui'
import { NavigationLinks } from './NavigationLinks'
import { SearchInput } from './SearchInput'
import { MobileMenu } from './MobileMenu'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isDesktopSearchOpen, setIsDesktopSearchOpen] = useState(false)

  return (
    <header className="w-full flex justify-between items-center mt-5 rounded-[50px] bg-white pr-4 relative z-20">
      {/* Левая часть: логотип и навигация */}
      <div className="flex items-center">
        <Link href={'/'}>
          <MainIcon className="py-3" />
        </Link>
        <NavigationLinks />
      </div>
      {/* Правая часть: поиск, профиль и меню */}
      <div className="flex items-center gap-3 md:ml-4">
        {/* Мобильный поиск - открывает оверлей */}
        <button
          type="button"
          className="block md:hidden"
          aria-label="Открыть поиск"
          onClick={() => setIsSearchOpen(true)}
        >
          <SearchButton className="rounded-[22px] w-11 h-11" />
        </button>
        {/* Десктопный поиск - иконка или строка */}
        {!isDesktopSearchOpen ? (
          <button
            type="button"
            className="hidden lg:block"
            aria-label="Открыть поиск"
            onClick={() => setIsDesktopSearchOpen(true)}
          >
            <SearchButton className="rounded-[22px] w-8 h-8" />
          </button>
        ) : (
          <div className="hidden lg:block">
            <SearchInput onClose={() => setIsDesktopSearchOpen(false)} />
          </div>
        )}
        {/* Планшетный поиск - всегда строка */}
        <div className="hidden md:block lg:hidden">
          <SearchInput />
        </div>
        <Link href="/auth/login" className="hidden md:block">
          <Person className="w-11 h-11 lg:w-8 lg:h-8" />
        </Link>
        <button
          type="button"
          className="block lg:hidden"
          aria-label="Открыть меню"
          onClick={() => setIsMenuOpen(true)}
        >
          <MenuIcon className="w-11 h-11 bg-background rounded-[22px]" />
        </button>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  )
}
