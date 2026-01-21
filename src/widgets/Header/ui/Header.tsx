'use client'

import Link from 'next/link'
import { useState } from 'react'
import { MainIcon, MenuIcon, NotificationIcon, Person, SearchButton, SearchOverlay } from '@/shared/ui'
import { useSession } from '@/entities/Session'
import { LogoutIconButton } from '@/features/Auth/logout'
import { NavigationLinks } from './NavigationLinks'
import { SearchInput } from './SearchInput'
import { MobileMenu } from './MobileMenu'
import { useHeaderLinks } from '../model/hooks/useHeaderLinks'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isDesktopSearchOpen, setIsDesktopSearchOpen] = useState(false)
  const { data: session } = useSession()
  const profileHref = session?.user
    ? session.user.role === 'client'
      ? '/profile/client/account'
      : '/profile/company/account'
    : '/auth/login'
  const notificationsHref = '/notifications'
  const headerLinks = useHeaderLinks(session?.user?.role)

  return (
    <header className="w-full flex justify-between items-center mt-5 rounded-[50px] bg-white pr-4 relative z-30">
      {/* Левая часть: логотип и навигация */}
      <div className="flex items-center">
        <Link href={'/'} className="cursor-pointer">
          <MainIcon className="py-3" />
        </Link>
        <NavigationLinks links={headerLinks} />
      </div>
      {/* Правая часть: поиск, профиль и меню */}
      <div className="flex items-center gap-3 md:ml-4">
        {/* Мобильный поиск - открывает оверлей */}
        <button
          type="button"
          className="block md:hidden cursor-pointer"
          aria-label="Открыть поиск"
          onClick={() => setIsSearchOpen(true)}
        >
            <SearchButton className="rounded-[22px] w-11 h-11" />
        </button>
        {/* Десктопный поиск - иконка или строка */}
        {!isDesktopSearchOpen ? (
          <button
            type="button"
            className="hidden lg:block cursor-pointer"
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
        {session?.user && (
          <Link href={notificationsHref} className="hidden lg:block cursor-pointer" aria-label="Уведомления">
            <NotificationIcon className="w-11 h-11 lg:w-8 lg:h-8" />
          </Link>
        )}
        <Link href={profileHref} className="hidden md:block cursor-pointer">
          <Person className="w-11 h-11 lg:w-8 lg:h-8" />
        </Link>
        {session?.user && (
          <LogoutIconButton
            className="hidden lg:block"
            iconClassName="w-11 h-11 lg:w-8 lg:h-8 cursor-pointer"
            ariaLabel="Выйти"
          />
        )}
        <button
          type="button"
          className="block lg:hidden cursor-pointer"
          aria-label="Открыть меню"
          onClick={() => setIsMenuOpen(true)}
        >
          <MenuIcon className="w-11 h-11 bg-background rounded-[22px]" />
        </button>
      </div>
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        profileHref={profileHref}
        links={headerLinks}
        isAuthorized={Boolean(session?.user)}
      />
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  )
}
