import Link from 'next/link'
import { MainIcon2, CloseIcon } from '@/shared/ui'
import { StateProvider } from '@/app/providers/State/StateProvider'
import { useMobileMenu } from '../model/hooks/useMobileMenu'

export const MobileMenu = () => {
  const {
    isMenuOpen,
    isSessionLoading,
    isAuthorized,
    profileHref,
    notificationsHref,
    mobileLinks,
    mobileSkeletons,
    closeMenu,
    handleLogoutAndClose,
    isPending,
  } = useMobileMenu()

  if (!isMenuOpen) return null

  return (
    <div className="fixed inset-0 z-10 lg:hidden">
      <div className="relative w-full bg-accent-senary rounded-b-3xl md:px-20 px-5 md:pt-8 pt-3 pb-20 text-white">
        <div className="flex items-center justify-between">
          <Link href="/">
            <MainIcon2 className="w-20 h-20 py-3" />
          </Link>
          <button
            type="button"
            aria-label="Закрыть меню"
            className="w-11 h-11 rounded-full bg-[#F3EDE3] text-accent-senary flex items-center justify-center"
            onClick={closeMenu}
          >
            <CloseIcon />
          </button>
        </div>
        <nav className=" flex flex-col text-lg font-semibold ml-3">
          <StateProvider
            isLoading={isSessionLoading}
            isError={false}
            loadingComponent={(
              <div className="flex flex-col">
                {mobileSkeletons.map((index) => (
                  <span
                    key={`mobile-header-link-skeleton-${index}`}
                    className="py-4 border-b border-[#EBE7DF]/20 md:border-b-0"
                  >
                    <span className="inline-block h-5 w-40 rounded bg-[#F3EDE3]/40" aria-hidden="true" />
                  </span>
                ))}
              </div>
            )}
          >
            <>
              {mobileLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.label === 'Личный кабинет' ? profileHref : link.href}
                  onClick={closeMenu}
                  className="py-4 border-b border-[#EBE7DF]/20 md:border-b-0"
                >
                  {link.label}
                </Link>
              ))}
              {isAuthorized && (
                <Link
                  href={notificationsHref}
                  onClick={closeMenu}
                  className="py-4 border-b border-[#EBE7DF]/20 md:border-b-0"
                >
                  Уведомления
                </Link>
              )}
              {isAuthorized && (
                <button
                  type="button"
                  className="py-4 border-b border-[#EBE7DF]/20 md:border-b-0 text-left disabled:opacity-50"
                  onClick={handleLogoutAndClose}
                  disabled={isPending}
                >
                  {isPending ? 'Выход...' : 'Выйти'}
                </button>
              )}
            </>
          </StateProvider>
        </nav>
      </div>
    </div>
  )
}
