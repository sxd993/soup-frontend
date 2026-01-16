'use client'

import { useRouter } from 'next/navigation'
import { useSession } from '@/entities/Session'
import { ClientProfile } from '@/widgets/Profile/ClientProfile'
import { CompanyProfile } from '@/widgets/Profile/CompanyProfile'
import { LoadingState, ErrorState } from '@/shared/ui'

export function ProfileGate() {
    const router = useRouter()
    const { data: session, isLoading, isError } = useSession()

    if (isLoading) {
        return <LoadingState />
    }

    if (isError) {
        return <ErrorState message="Не удалось проверить сессию" />
    }

    if (!session) {
        router.replace('/auth/login')
        return null
    }

    return session.user.role === 'client' ? (
        <ClientProfile />
    ) : (
        <CompanyProfile />
    )
}