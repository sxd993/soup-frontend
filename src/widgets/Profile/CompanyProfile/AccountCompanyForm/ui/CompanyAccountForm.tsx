'use client';
import { FormProvider } from "react-hook-form"
import { CompanyProfileEdit, CompanyContactEdit, CompanySocialLinksEdit, CompannyAddressEdit } from "@/features/Profile/CompanyAccount/AccountSection"
import { useSession } from "@/entities/Session"
import { useCompanyAccountForm, useCompanyProfile } from "../model"
import { Button } from "@/shared/ui";
import { CompanyAccountFormSkeleton } from "./CompanyAccountFormSkeleton";
import { StateProvider } from "@/app/providers/State/StateProvider";

export const CompanyAccountForm = () => {

    // Получение сессии и данных компании
    const { data: session, isLoading: isSessionLoading } = useSession()
    const userId = session?.user?.id

    // Компания пользователя
    const { data: company, isLoading: isCompanyLoading, isError: isCompanyError } = useCompanyProfile(userId)

    // Использование кастомного хука для управления формой
    const { form, handleSubmit, isPending } = useCompanyAccountForm(company, userId)

    // Показ скелетона, если данные сессии или компании еще загружаются
    const showSkeleton = isSessionLoading || (isCompanyLoading && !company)

    return (
        <StateProvider
            isLoading={showSkeleton}
            isError={isCompanyError}
            loadingComponent={<CompanyAccountFormSkeleton />}
            errorMessage="Не удалось загрузить данные компании"
        >
        <FormProvider {...form}>
            <form className="flex w-full flex-col gap-5" noValidate onSubmit={handleSubmit}>

                {/* Вкладка Название и Описание */}
                <CompanyProfileEdit />

                {/* Вкладка Телефон и почта */}
                <CompanyContactEdit />

                {/* Вкладка Сайт и соцсети */}
                <CompanySocialLinksEdit />

                {/* Вкладка Адрес */}
                <CompannyAddressEdit />

                {/* Кнопка сохранения настроек */}
                <Button
                    type="submit"
                    className="w-full self-stretch sm:w-auto sm:self-end"
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
