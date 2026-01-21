'use client';
import { FormProvider } from "react-hook-form"
import { CompanyProfileEdit, CompanyContactEdit, CompanySocialLinksEdit, CompannyAddressEdit } from "@/features/Profile/CompanyAccount/AccountSection"
import { useCompanyAccountForm } from "../model"

export const AccountCompanyForm = () => {
    const { form } = useCompanyAccountForm()

    return (
        <FormProvider {...form}>
            <form className="flex flex-col gap-5" noValidate>
                <CompanyProfileEdit />
                <CompanyContactEdit />
                <CompanySocialLinksEdit />
                <CompannyAddressEdit />
            </form>
        </FormProvider>
    )
}
