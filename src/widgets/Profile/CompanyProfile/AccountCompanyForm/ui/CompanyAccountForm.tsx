'use client';
import { FormProvider } from "react-hook-form"
import { CompanyProfileEdit, CompanyContactEdit, CompanySocialLinksEdit, CompannyAddressEdit } from "@/features/Profile/CompanyAccount/AccountSection"
import { useSession } from "@/entities/Session"
import { useCompanyAccountForm, useCompanyProfile } from "../model"
import { Button } from "@/shared/ui";
import { CompanyAccountFormSkeleton } from "./CompanyAccountFormSkeleton";

export const CompanyAccountForm = () => {

    // Получение сессии и данных компании
    const { data: session, isLoading: isSessionLoading } = useSession()
    const userId = session?.user?.id

    // Компания пользователя
    const { data: company, isLoading: isCompanyLoading } = useCompanyProfile(userId)

    // Использование кастомного хука для управления формой
    const { form, handleSubmit, isPending } = useCompanyAccountForm(company, userId)

    // Показ скелетона, если данные сессии или компании еще загружаются
    const showSkeleton = isSessionLoading || (isCompanyLoading && !company)

    if (showSkeleton) {
        return <CompanyAccountFormSkeleton />
    }

    return (
        <FormProvider {...form}>
            <form className="flex w-full flex-col gap-5 px-4 md:max-w-[793px] md:px-0" noValidate onSubmit={handleSubmit}>

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
    )
}
