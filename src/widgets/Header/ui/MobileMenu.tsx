import Link from 'next/link'
import { MainIcon2, CloseIcon } from '@/shared/ui'
import { useLogoutRedirect } from '@/features/Auth/logout'
import type { HeaderLink } from '../model/const'

type MobileMenuProps = {
  isOpen: boolean
  onClose: () => void
  profileHref: string
  links: HeaderLink[]
  isAuthorized: boolean
}

export const MobileMenu = ({ isOpen, onClose, profileHref, links, isAuthorized }: MobileMenuProps) => {
  const { handleLogout, isPending } = useLogoutRedirect()

  if (!isOpen) return null

  const mobileLinks = links.filter((link) =>
    link.devices.some((device) => device === 'sm' || device === 'md'),
  )

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
            onClick={onClose}
          >
            <CloseIcon />
          </button>
        </div>
        <nav className=" flex flex-col text-lg font-semibold ml-3">
          {mobileLinks.map((link) => (
            <Link
              key={link.href}
              href={link.label === 'Личный кабинет' ? profileHref : link.href}
              onClick={onClose}
              className="py-4 border-b border-[#EBE7DF]/20 md:border-b-0"
            >
              {link.label}
            </Link>
          ))}
          {isAuthorized && (
            <Link
              href="/notifications"
              onClick={onClose}
              className="py-4 border-b border-[#EBE7DF]/20 md:border-b-0"
            >
              Уведомления
            </Link>
          )}
          {isAuthorized && (
            <button
              type="button"
              className="py-4 border-b border-[#EBE7DF]/20 md:border-b-0 text-left disabled:opacity-50"
              onClick={() => {
                handleLogout()
                onClose()
              }}
              disabled={isPending}
            >
              {isPending ? 'Выход...' : 'Выйти'}
            </button>
          )}
        </nav>
      </div>
    </div>
  )
}