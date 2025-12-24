'use client'

import Link from 'next/link'
import { useState } from 'react'
import { MainIcon } from '@/shared/ui/icons/index'
import { MenuIcon } from '@/shared/ui/icons/index'
import { NavigationLinks } from './NavigationLinks'
import { SearchInput } from './SearchInput'
import { Person } from '@/shared/ui/icons/index'
import { SearchButton } from '@/shared/ui/icons/index'
import { MobileMenu } from './MobileMenu'
import { SearchOverlay } from './SearchOverlay'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

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
        <button
          type="button"
          className="block md:hidden lg:block"
          aria-label="Открыть поиск"
          onClick={() => setIsSearchOpen(true)}
        >
          <SearchButton className="rounded-[22px] w-11 h-11 lg:w-8 lg:h-8" />
        </button>
        <div className="hidden md:block lg:hidden">
          <SearchInput />
        </div>
        <Link href="/profile" className="hidden md:block">
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
