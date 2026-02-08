'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from '@/entities/Session'
import { useSkeletons } from '@/shared/hooks'
import { StateProvider } from '@/app/providers/State/StateProvider'

type ProfileRole = 'client' | 'company'

type ProfileRoleGuardProps = {
    role: ProfileRole
    children: React.ReactNode
}

export function ProfileRoleGuard({ role, children }: ProfileRoleGuardProps) {
    const router = useRouter()
    const { data: session, isLoading, isError } = useSession()
    const { profileSkeleton } = useSkeletons()

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

    const canRender = !isLoading && !isError && session?.user.role === role
    const showLoading = isLoading && !session

    return (
        <StateProvider
            isLoading={showLoading}
            isError={Boolean(isError && !session)}
            loadingComponent={profileSkeleton}
            errorComponent={null}
        >
            <div>{canRender ? children : null}</div>
        </StateProvider>
    )
}
