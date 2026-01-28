'use client'

import Link from 'next/link'
import { MainIcon, MenuIcon, Person } from '@/shared/ui'
import { SearchInput } from '@/features/Search'
import { useHeaderSession } from '../../model/hooks/useHeaderSession'
import { useHeaderStore } from '../../model/store/useHeaderStore'

export const TabletHeader = () => {
  const { profileHref } = useHeaderSession()
  const { openMenu } = useHeaderStore()

  return (
    <div className="hidden md:flex lg:hidden w-full justify-between items-center">
      <div className="flex items-center">
        <Link href="/" className="cursor-pointer group">
          <MainIcon className="py-3" />
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <SearchInput />
        <Link href={profileHref} className="cursor-pointer" aria-label="Профиль">
          <Person className="w-11 h-11" />
        </Link>
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
