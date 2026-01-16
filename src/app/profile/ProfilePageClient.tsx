'use client'

import { ProfileGate } from '@/widgets/Profile/ProfileGate'

export function ProfilePageClient() {
    return (
        <div className="m-auto min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-6">
                <ProfileGate />
            </div>
        </div>
    )
}