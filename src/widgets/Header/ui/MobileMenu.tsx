import Link from 'next/link'
import { MainIcon2 } from '@/shared/ui/icons/index'
import { MOBILE_MENU_LINKS } from '../model/const'
import { CloseIcon } from '@/shared/ui/icons/index'

type MobileMenuProps = {
  isOpen: boolean
  onClose: () => void
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation()
    setTimeout(() => {
      onClose()
    }, 100)
  }

  return (
    <div className="fixed inset-0 z-30 lg:hidden">
      <div className="relative w-full bg-[#06352D] rounded-b-3xl md:px-20 px-5 md:pt-8 pt-3 pb-20 text-white">
        <div className="flex items-center justify-between">
          <MainIcon2 className="w-20 h-20 py-3" />
          <button
            type="button"
            aria-label="Закрыть меню"
            className="w-11 h-11 rounded-full bg-[#F3EDE3] text-[#06352D] flex items-center justify-center"
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
              onClick={handleLinkClick}
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
