'use client'

import { useSession } from '@/entities/Session'

export const useHeaderSession = () => {
  const { data: session, isLoading: isSessionLoading } = useSession()

  const role = session?.user?.role
  const isAuthorized = Boolean(session?.user)
  const profileHref = session?.user
    ? session.user.role === 'client'
      ? '/profile/client/account'
      : '/profile/company/account'
    : '/auth/login'

  return {
    role,
    isSessionLoading,
    isAuthorized,
    profileHref,
  }
}
