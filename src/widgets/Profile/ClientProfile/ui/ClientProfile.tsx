'use client'

import { LogoutButton } from '@/shared/ui'

export function ClientProfile() {
    return (
        <div className="flex flex-col items-center gap-4">
            <h1 className="text-2xl font-semibold">ЛК клиента</h1>
            <p className="text-muted-foreground">Здесь будет контент для клиента</p>
            <LogoutButton />
        </div>
    )
}