'use client'

import Link from 'next/link'
import { MainIcon } from '@/shared/ui/index'
import { SearchIcon } from '@/shared/ui/index'
import { PeopleIcon } from '@/shared/ui/index'
import { MenuIcon } from '@/shared/ui/index'
import { NavigationLinks } from './NavigationLinks'
import { SearchInput } from './SearchInput'

export const Header = () => {
  return (
    <div className="px-12">
      <header className="w-full flex justify-between items-center mt-10 rounded-[50px] bg-white pr-5 relative z-20">
        {/* Левая часть: логотип и навигация */}
        <div className="flex items-center">
          <MainIcon className="py-3" />
          <NavigationLinks />
        </div>
        {/* Правая часть: поиск, профиль и меню */}
        <div className="flex items-center gap-3 sm:ml-4">
          <Link href="/search" className="hidden md:block">
            <SearchIcon className="w-8 h-8 bg-[#EBE7DF] rounded-full" />
          </Link>
          <SearchInput />
          <Link href="/profile">
            <PeopleIcon className="w-11 h-11 md:w-8 md:h-8 bg-background rounded-full" />
          </Link>
          {/* Меню только на мобильных */}
          <Link href="/menu" className="block md:hidden">
            <MenuIcon className="w-11 h-11 bg-background rounded-[22px]" />
          </Link>
        </div>
      </header>
    </div>
  )
}