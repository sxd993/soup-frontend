import Link from 'next/link'
import { NAVIGATION_LINKS } from '../constants'

export const NavigationLinks = () => {
  return (
    <div className="hidden md:flex ml-5 gap-7">
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