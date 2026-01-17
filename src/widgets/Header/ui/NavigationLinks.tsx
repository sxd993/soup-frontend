'use client'

import Link from 'next/link'
import { useCurrentPath } from '@/shared/hooks'
import type { HeaderLink } from '../model/const'

type NavigationLinksProps = {
  links: HeaderLink[]
}

// Компонент навигационных ссылок
export const NavigationLinks = ({ links }: NavigationLinksProps) => {
  const pathname = useCurrentPath()
  const navigationLinks = links.filter((link) => link.devices.includes('lg'))

  return (
    <div className="hidden lg:flex pl-5 gap-8 text-center items-center text-nowrap">
      {navigationLinks.map((link) => {
        const isActive = pathname?.startsWith(link.href)

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? 'page' : undefined}
            className="lg:text-base font-semibold"
            style={{ color: isActive ? '#8BC652' : undefined }}
          >
            {link.label}
          </Link>
        )
      })}
    </div>
  )
}