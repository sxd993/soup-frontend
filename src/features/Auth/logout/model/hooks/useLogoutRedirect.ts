'use client'

import { useRouter } from 'next/navigation'
import { useLogout } from './useLogout'

export const useLogoutRedirect = () => {
  const router = useRouter()
  const { mutate: logout, isPending } = useLogout()

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        router.push('/auth/login')
      },
    })
  }

  return { handleLogout, isPending }
}