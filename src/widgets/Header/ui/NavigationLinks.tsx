import Link from 'next/link'
import { NAVIGATION_LINKS } from '../constants'

export const NavigationLinks = () => {
  return (
    <div className="hidden md:flex lg:pl-5 gap-7 text-center items-center text-nowrap">
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