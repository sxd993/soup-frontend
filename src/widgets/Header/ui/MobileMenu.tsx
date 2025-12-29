import Link from 'next/link'
import { MainIcon2, CloseIcon } from '@/shared/ui'
import { MOBILE_MENU_LINKS } from '../model/const'

type MobileMenuProps = {
  isOpen: boolean
  onClose: () => void
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null

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
          {MOBILE_MENU_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="py-4 border-b border-[#EBE7DF]/20 md:border-b-0"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}