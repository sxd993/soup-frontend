import { useFormContext, useWatch } from "react-hook-form"
import type { CompanyAccountFormValues } from "@/widgets/Profile/CompanyProfile/AccountCompanyForm/model/types/CompanyAccountFormValues.types"

const isValidEmail = (value: string) => {
    const trimmed = value.trim()
    if (!trimmed) return true
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)
}

export const useCompanyEmailInput = (index: number) => {
    const { register, formState, control } = useFormContext<CompanyAccountFormValues>()
    const fieldName = `contacts.emails.${index}` as const
    const emailValue = useWatch({ control, name: fieldName })

    const emailInputProps = register(fieldName, {
        validate: (value) => isValidEmail(String(value)) || "Некорректная почта",
    })

    const error =
        formState.errors?.contacts?.emails?.[index]
    const errorMessage = typeof error?.message === "string" ? error.message : ""

    return {
        emailInputProps,
        isEmailFilled: String(emailValue ?? "").length > 0,
        errorMessage,
    }
}
