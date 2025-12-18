import Link from 'next/link'
import { NAVIGATION_LINKS } from '../model/const'

// Компонент навигационных ссылок
export const NavigationLinks = () => {
  return (
    <div className="hidden lg:flex pl-5 gap-8 text-center items-center text-nowrap">
      {NAVIGATION_LINKS.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="text-secondary lg:text-base font-semibold"
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}