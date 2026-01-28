'use client'

import Link from 'next/link'
import { MainIcon, MenuIcon, SearchButton } from '@/shared/ui'
import { useHeaderStore } from '../../model/store/useHeaderStore'

export const MobileHeader = () => {
  const { openMenu, openSearch } = useHeaderStore()

  return (
    <div className="flex md:hidden w-full justify-between items-center">
      <div className="flex items-center">
        <Link href="/" className="cursor-pointer group">
          <MainIcon className="py-3" />
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="cursor-pointer"
          aria-label="Открыть поиск"
          onClick={openSearch}
        >
          <SearchButton className="rounded-[22px] w-11 h-11" />
        </button>
        <button
          type="button"
          className="cursor-pointer"
          aria-label="Открыть меню"
          onClick={openMenu}
        >
          <MenuIcon className="w-11 h-11 bg-background rounded-[22px]" />
        </button>
      </div>
    </div>
  )
}
