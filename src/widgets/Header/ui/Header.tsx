'use client'

import Link from 'next/link'
import { MainIcon } from '@/shared/ui/icons/index'
import { MenuIcon } from '@/shared/ui/icons/index'
import { NavigationLinks } from './NavigationLinks'
import { SearchInput } from './SearchInput'
import { Person } from '@/shared/ui/icons/Person'
import { Search } from '@/shared/ui/icons/Search'

export const Header = () => {
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
        <Link href="/search" className="block md:hidden lg:block">
          <Search className="bg-background rounded-[22px]" />
        </Link>
        <div className="hidden md:block lg:hidden">
          <SearchInput />
        </div>
        <Link href="/profile" className="hidden md:block">
          <Person />
        </Link>
        <Link href="/menu" className="block lg:hidden">
          <MenuIcon className="w-11 h-11 bg-background rounded-[22px]" />
        </Link>
      </div>
    </header>
  )
}