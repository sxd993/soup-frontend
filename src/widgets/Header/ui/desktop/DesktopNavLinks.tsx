'use client'

import Link from 'next/link'
import { StateProvider } from '@/app/providers/State/StateProvider'
import { useHeaderNavigation } from '../../model/hooks/useHeaderNavigation'
import { useHeaderSession } from '../../model/hooks/useHeaderSession'

export const DesktopNavLinks = () => {
  const { role, isSessionLoading } = useHeaderSession()
  const { desktopLinks, desktopSkeletons } = useHeaderNavigation(role, isSessionLoading)

  return (
    <StateProvider
      isLoading={isSessionLoading}
      isError={false}
      errorTitle="Не удалось загрузить навигацию"
      loadingComponent={(
        <div className="hidden lg:flex pl-5 gap-8 text-center items-center text-nowrap header-nav-links">
          {desktopSkeletons.map((index) => (
            <span
              key={`header-link-skeleton-${index}`}
              className="inline-block h-4 w-28 rounded bg-gray-200"
              aria-hidden="true"
            />
          ))}
        </div>
      )}
    >
      <div className="hidden lg:flex pl-5 gap-8 text-center items-center text-nowrap header-nav-links">
        {desktopLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={link.isActive ? 'page' : undefined}
            className="lg:text-base font-semibold"
            style={{ color: link.isActive ? '#8BC652' : undefined }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </StateProvider>
  )
}
