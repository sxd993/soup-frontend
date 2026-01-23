'use client';
import { FormProvider } from "react-hook-form"
import { CompanyProfileEdit, CompanyContactEdit, CompanySocialLinksEdit, CompannyAddressEdit } from "@/features/Profile/CompanyAccount/AccountSection"
import { useSession } from "@/entities/Session"
import { useCompanyAccountForm, useCompanyProfile } from "../model"
import { Button } from "@/shared/ui";

export const CompanyAccountForm = () => {
    const { data: session } = useSession()
    const userId = session?.user?.id
    const { data: company } = useCompanyProfile(userId)
    const { form, handleSubmit, isPending } = useCompanyAccountForm(company, userId)

    return (
        <FormProvider {...form}>
            <form className="flex w-full flex-col gap-5 px-4 md:max-w-[793px] md:px-0" noValidate onSubmit={handleSubmit}>
                <CompanyProfileEdit />
                <CompanyContactEdit />
                <CompanySocialLinksEdit />
                <CompannyAddressEdit />
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
