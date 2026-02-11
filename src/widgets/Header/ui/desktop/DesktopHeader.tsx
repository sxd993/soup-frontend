'use client'

import Link from 'next/link'
import { MainIcon, Person, SearchButton } from '@/shared/ui'
import { LogoutIconButton } from '@/features/Auth/logout'
import { StateProvider } from '@/app/providers/State/StateProvider'
import { SearchInput } from '@/features/Search'
import { DesktopNavLinks } from './DesktopNavLinks'
import { useHeaderSession } from '../../model/hooks/useHeaderSession'
import { useHeaderStore } from '../../model/store/useHeaderStore'

export const DesktopHeader = () => {
  const { isDesktopSearchOpen, openDesktopSearch, closeDesktopSearch } = useHeaderStore()
  const { isSessionLoading, isAuthorized, profileHref } = useHeaderSession()

  return (
    <div className="hidden lg:flex w-full justify-between items-center">
      <div className="flex items-center">
        <Link href="/" className="cursor-pointer group">
          <MainIcon className="py-3" />
        </Link>
        <DesktopNavLinks />
      </div>
      <div className="flex items-center gap-3 md:ml-4">
        {!isSessionLoading && (
          !isDesktopSearchOpen ? (
            <button
              type="button"
              className="hidden lg:block cursor-pointer"
              aria-label="Открыть поиск"
              onClick={openDesktopSearch}
            >
              <SearchButton className="rounded-[22px] w-8 h-8" />
            </button>
          ) : (
            <div className="hidden lg:block">
              <SearchInput onClose={closeDesktopSearch} />
            </div>
          )
        )}
        <StateProvider
          isLoading={isSessionLoading}
          isError={false}
          loadingComponent={(
            <div className="hidden lg:flex items-center gap-3">
              <span className="inline-block w-8 h-8 rounded-full bg-gray-200" aria-hidden="true" />
              <span className="inline-block w-8 h-8 rounded-full bg-gray-200" aria-hidden="true" />
              <span className="inline-block w-8 h-8 rounded-full bg-gray-200" aria-hidden="true" />
            </div>
          )}
        >
          <div className="hidden lg:flex items-center gap-3">
            <Link href={profileHref} className="cursor-pointer" aria-label="Профиль">
              <Person className="w-8 h-8" />
            </Link>
            {isAuthorized && (
              <LogoutIconButton
                className="hidden lg:block"
                iconClassName="w-8 h-8 cursor-pointer"
                ariaLabel="Выйти"
              />
            )}
          </div>
        </StateProvider>
      </div>
    </div>
  )
}
