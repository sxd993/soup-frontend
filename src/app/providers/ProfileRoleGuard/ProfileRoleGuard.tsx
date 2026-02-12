'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from '@/entities/Session'
import { StateProvider } from '@/app/providers/State/StateProvider'

type ProfileRole = 'client' | 'company'

type ProfileRoleGuardProps = {
    role: ProfileRole
    children: React.ReactNode
}

export function ProfileRoleGuard({ role, children }: ProfileRoleGuardProps) {
    const router = useRouter()
    const { data: session, isLoading, isError } = useSession()

    useEffect(() => {
        if (isLoading || isError) {
            return
        }

        if (!session) {
            router.replace('/auth/login')
            return
        }

        if (session.user.role !== role) {
            const target =
                session.user.role === 'client' ? '/profile/client/account' : '/profile/company/account'
            router.replace(target)
        }
    }, [isError, isLoading, role, router, session])

    const showLoading = isLoading && !session
    const hasError = Boolean(isError && !session)
    const canRender = !showLoading && !hasError && session?.user.role === role

    useEffect(() => {
        if (hasError) {
            alert('Не удалось загрузить профиль. Попробуйте позже.')
        }
    }, [hasError])

    return (
        <StateProvider
            isLoading={showLoading}
            isError={hasError}
        >
            <div>{canRender ? children : null}</div>
        </StateProvider>
    )
}
