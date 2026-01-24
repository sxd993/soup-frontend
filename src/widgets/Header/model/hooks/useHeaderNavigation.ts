'use client'

import { useMemo } from 'react'
import type { User } from '@/entities/Session'
import { useCurrentPath } from '@/shared/hooks'
import { HEADER_LINKS } from '../const'
import { useHeaderLinks } from './useHeaderLinks'

export const useHeaderNavigation = (role?: User['role'], isSessionLoading?: boolean) => {
  const pathname = useCurrentPath()
  const headerLinks = useHeaderLinks(role)

  const desktopLinks = useMemo(
    () =>
      headerLinks
        .filter((link) => link.devices.includes('lg'))
        .map((link) => ({
          ...link,
          isActive: Boolean(pathname?.startsWith(link.href)),
        })),
    [headerLinks, pathname],
  )
  const mobileLinks = useMemo(
    () => headerLinks.filter((link) => link.devices.some((device) => device === 'sm' || device === 'md')),
    [headerLinks],
  )
  const desktopSkeletons = useMemo(
    () => HEADER_LINKS.filter((link) => link.devices.includes('lg')).map((_, index) => index),
    [],
  )
  const mobileSkeletons = useMemo(
    () => HEADER_LINKS.filter((link) => link.devices.some((device) => device === 'sm' || device === 'md')).map((_, index) => index),
    [],
  )

  return {
    isSessionLoading: Boolean(isSessionLoading),
    desktopLinks,
    mobileLinks,
    desktopSkeletons,
    mobileSkeletons,
  }
}
