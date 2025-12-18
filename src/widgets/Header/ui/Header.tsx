'use client'

import Link from 'next/link'
import { MainIcon } from '@/shared/ui/icons/index'
import { SearchIcon } from '@/shared/ui/icons/index'
import { MenuIcon } from '@/shared/ui/icons/index'
import { NavigationLinks } from './NavigationLinks'
import { SearchInput } from './SearchInput'
import { PersonIcon } from '@/shared/ui/icons/Person'

export const Header = () => {
  return (
    <header className="w-full flex justify-between items-center mt-5 rounded-[50px] bg-white pr-5 relative z-20">
      {/* Левая часть: логотип и навигация */}
      <div className="flex items-center">
        <Link href={'/'}>
          <MainIcon className="py-3" />
        </Link>
        <NavigationLinks />
      </div>
      {/* Правая часть: поиск, профиль и меню */}
      <div className="flex items-center gap-3 sm:ml-4">
        <Link href="/search" className="block sm:hidden md:block!">
          <SearchIcon />
        </Link>
        <SearchInput />
        <Link href="/profile" className="hidden sm:block">
          <PersonIcon />
        </Link>
        {/* Меню только на мобильных */}
        <Link href="/menu" className="block md:hidden">
          <MenuIcon className="w-11 h-11 bg-background rounded-[22px]" />
        </Link>
      </div>
    </header>
  )
}