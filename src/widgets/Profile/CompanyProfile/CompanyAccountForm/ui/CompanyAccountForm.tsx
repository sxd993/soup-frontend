'use client';
import { FormProvider } from "react-hook-form"
import { CompanyProfileEdit, CompanyContactEdit, CompanySocialLinksEdit, CompannyAddressEdit } from "@/features/Profile/CompanyAccount/AccountSection"
import { useSession } from "@/entities/Session"
import { useCompanyAccountForm, useCompanyProfile } from "../model"
import { Button } from "@/shared/ui";

const CompanyAccountFormSkeleton = () => {
    return (
        <div className="flex flex-col gap-5 max-w-[793px] animate-pulse" aria-busy="true" aria-live="polite">
            <div className="bg-white p-5 flex flex-col gap-4.5 rounded-[20px]">
                <div className="h-6 w-48 bg-gray-200 rounded" />
                <div className="flex flex-col gap-3">
                    <div className="h-10 bg-gray-200 rounded" />
                    <div className="h-20 bg-gray-200 rounded" />
                    <div className="h-10 bg-gray-200 rounded" />
                </div>
            </div>

            <div className="bg-white p-5 flex flex-col gap-4.5 rounded-[20px]">
                <div className="h-6 w-40 bg-gray-200 rounded" />
                <div className="flex flex-col gap-3">
                    <div className="flex gap-5">
                        <div className="h-10 flex-1 bg-gray-200 rounded" />
                        <div className="h-10 flex-1 bg-gray-200 rounded" />
                    </div>
                    <div className="h-10 bg-gray-200 rounded" />
                </div>
            </div>

            <div className="bg-white p-5 flex flex-col gap-4.5 rounded-[20px]">
                <div className="h-6 w-44 bg-gray-200 rounded" />
                <div className="grid grid-cols-2 gap-3">
                    <div className="h-10 bg-gray-200 rounded" />
                    <div className="h-10 bg-gray-200 rounded" />
                    <div className="h-10 bg-gray-200 rounded" />
                    <div className="h-10 bg-gray-200 rounded" />
                </div>
            </div>

            <div className="bg-white p-5 flex flex-col gap-4.5 rounded-[20px]">
                <div className="h-6 w-52 bg-gray-200 rounded" />
                <div className="h-10 bg-gray-200 rounded" />
            </div>

            <div className="h-10 w-32 bg-gray-200 rounded self-end" />
        </div>
    )
}

export const CompanyAccountForm = () => {
    const { data: session, isLoading: isSessionLoading } = useSession()
    const userId = session?.user?.id
    const { data: company, isLoading: isCompanyLoading } = useCompanyProfile(userId)
    const { form, handleSubmit } = useCompanyAccountForm(company)
    const showSkeleton = isSessionLoading || (isCompanyLoading && !company)

    if (showSkeleton) {
        return <CompanyAccountFormSkeleton />
    }

    return (
        <FormProvider {...form}>
            <form className="flex flex-col gap-5 max-w-[793px]" noValidate onSubmit={handleSubmit}>
                <CompanyProfileEdit />
                <CompanyContactEdit />
                <CompanySocialLinksEdit />
                <CompannyAddressEdit />
                <Button
                    type="submit"
                    className="max-w-1/4 self-end"
                >
                    Сохранить
                </Button>
            </form>
        </FormProvider>
    )
}
