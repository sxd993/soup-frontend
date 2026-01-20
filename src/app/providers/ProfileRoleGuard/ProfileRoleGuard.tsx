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
                session.user.role === 'client' ? '/profile/client' : '/profile/company'
            router.replace(target)
        }
    }, [isError, isLoading, role, router, session])

    const canRender = !isLoading && !isError && session?.user.role === role

    return (
        <StateProvider
            isLoading={isLoading}
            isError={isError}
            errorMessage="У вас нет доступа к этой странице"
        >
            <div>
                {canRender ? children : null}
            </div>
        </StateProvider>
    )
}
