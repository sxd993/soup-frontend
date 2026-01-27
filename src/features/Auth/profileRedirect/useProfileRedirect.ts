'use client'

import { useRouter } from 'next/navigation'
import { useSession } from '@/entities/Session'

export const useProfileRedirect = () => {
  const router = useRouter()
  const { data: session, refetch } = useSession()

  const onGoProfile = async () => {
    // Пытаемся получить актуальную сессию, если её ещё нет
    let currentSession = session

    if (!currentSession?.user) {
      const { data } = await refetch()
      currentSession = data
    }

    if (!currentSession?.user) {
      router.push('/auth/login')
      return
    }

    const target =
      currentSession.user.role === 'client'
        ? '/profile/client/account'
        : '/profile/company/account'

    router.push(target)
  }

  return { onGoProfile }
}