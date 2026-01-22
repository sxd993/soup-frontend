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
    const { form, handleSubmit } = useCompanyAccountForm(company)

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
