'use client'

import { useRouter } from 'next/navigation'
import { useSession } from '@/entities/Session'
import { ClientProfile } from '@/widgets/Profile/ClientProfile'
import { CompanyProfile } from '@/widgets/Profile/CompanyProfile'
import { StateProvider } from '@/app/providers/State/StateProvider'

export function ProfileGate() {
    const router = useRouter()
    const { data: session, isLoading, isError } = useSession()

    if (!isLoading && !isError && !session) {
        router.replace('/auth/login')
        return null
    }

    return (
        <StateProvider
            isLoading={isLoading}
            isError={isError}
            errorMessage="Не удалось проверить сессию"
        >
            {session?.user.role === 'client' ? <ClientProfile /> : <CompanyProfile />}
        </StateProvider>
    )
}