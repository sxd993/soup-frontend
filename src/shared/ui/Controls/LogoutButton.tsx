'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/shared/ui'
import { useLogout } from '@/features/Auth/logout/useLogout'

export function LogoutButton() {
    const router = useRouter()
    const { mutate: logout, isPending } = useLogout()

    const handleLogout = () => {
        logout(undefined, {
            onSuccess: () => {
                router.push('/auth/login')
            }
        })
    }

    return (
        <Button
            onClick={handleLogout}
            disabled={isPending}
            className="rounded-full bg-primary px-19 py-2 transition hover:bg-accent"
        >
            {isPending ? 'Выход...' : 'Выйти'}
        </Button>
    )
}