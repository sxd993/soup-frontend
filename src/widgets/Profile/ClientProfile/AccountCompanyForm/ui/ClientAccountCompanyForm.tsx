'use client';

import { StateProvider } from "@/app/providers/State/StateProvider";
import { useClientProfile } from "@/entities/Profile/Client";
import { useSession } from "@/entities/Session";
import {
    ClientContactEdit,
    ClientNotificationsSettings,
    ClientPrivacySettings,
    ClientProfileEdit,
} from "@/features/Profile/ClientAccount"
import { Button } from "@/shared/ui"
import { FormProvider } from "react-hook-form";
import { useClientAccountForm } from "../model";
import { ClientAccountFormSkeleton } from "./ClientAccountFormSkeleton";

export const ClientAccountCompanyForm = () => {
    const { data: session, isLoading: isSessionLoading } = useSession()
    const userId = session?.user?.id
    const { data: client, isLoading: isClientLoading, isError: isClientError } = useClientProfile(userId)
    const { form, handleSubmit, isPending } = useClientAccountForm(client, userId)

    const showSkeleton = isSessionLoading || (isClientLoading && !client)

    return (
        <StateProvider
            isLoading={showSkeleton}
            isError={isClientError}
            loadingComponent={<ClientAccountFormSkeleton />}
            errorTitle="Не удалось загрузить данные клиента"
        >
            <FormProvider {...form}>
                <form className="flex w-full flex-col gap-5" noValidate onSubmit={handleSubmit}>
                    <ClientProfileEdit />
                    <ClientContactEdit />
                    <ClientNotificationsSettings />
                    <ClientPrivacySettings />

                    <Button
                        type="submit"
                        className="w-full cursor-pointer font-normal! disabled:cursor-not-allowed"
                        disabled={isPending}
                        aria-disabled={isPending}
                    >
                        Сохранить
                    </Button>
                </form>
            </FormProvider>
        </StateProvider>
    )
}
