'use client'

import { useCallback } from 'react'
import { useLogoutRedirect } from '@/features/Auth/logout'
import { useHeaderNavigation } from './useHeaderNavigation'
import { useHeaderSession } from './useHeaderSession'
import { useHeaderStore } from '../store/useHeaderStore'

export const useMobileMenu = () => {
  const { role, isSessionLoading, isAuthorized, profileHref } = useHeaderSession()
  const { mobileLinks, mobileSkeletons } = useHeaderNavigation(role, isSessionLoading)
  const { isMenuOpen, closeMenu } = useHeaderStore()
  const { handleLogout, isPending } = useLogoutRedirect()

  const handleLogoutAndClose = useCallback(() => {
    handleLogout()
    closeMenu()
  }, [closeMenu, handleLogout])

  return {
    isMenuOpen,
    isSessionLoading,
    isAuthorized,
    profileHref,
    mobileLinks,
    mobileSkeletons,
    closeMenu,
    handleLogoutAndClose,
    isPending,
  }
}
