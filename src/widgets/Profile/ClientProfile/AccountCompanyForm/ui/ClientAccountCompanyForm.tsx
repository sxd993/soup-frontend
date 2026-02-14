'use client';

import {
    ClientContactEdit,
    ClientNotificationsSettings,
    ClientPrivacySettings,
    ClientProfileEdit,
} from "@/features/Profile/ClientAccount"
import { Button } from "@/shared/ui"

export const ClientAccountCompanyForm = () => {

    return (
        <form className="flex w-full flex-col gap-5" noValidate>
            <ClientProfileEdit />
            <ClientContactEdit />
            <ClientNotificationsSettings />
            <ClientPrivacySettings />

            <Button type="button" className="w-full cursor-pointer">
                Сохранить
            </Button>
        </form>
    )
}
