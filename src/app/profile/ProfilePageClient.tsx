'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/shared/ui'
import { useLogout } from '@/features/Auth/logout'

export function ProfilePageClient() {
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
        <div className="m-auto min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-6">
                <h1 className="text-2xl font-semibold">Профиль</h1>
                <Button
                    onClick={handleLogout}
                    disabled={isPending}
                    className="rounded-full bg-primary px-19 py-2 transition hover:bg-accent"
                >
                    {isPending ? 'Выход...' : 'Выйти'}
                </Button>
            </div>
        </div>
    )
}