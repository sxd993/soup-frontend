import { useFormContext, useWatch } from "react-hook-form"
import type { CompanyAccountFormValues } from "@/widgets/Profile/CompanyProfile/AccountCompanyForm/model/types/CompanyAccountFormValues.types"

const PHONE_MAX_LENGTH = 11

export const useCompanyPhoneInput = (index: number) => {
    const { register, formState, control } = useFormContext<CompanyAccountFormValues>()
    const fieldName = `contacts.phones.${index}.phone` as const
    const phoneValue = useWatch({ control, name: fieldName })

    const phoneInputProps = register(fieldName, {
        maxLength: {
            value: PHONE_MAX_LENGTH,
            message: `Не более ${PHONE_MAX_LENGTH} символов`,
        },
        validate: (value) => {
            const normalized = String(value)
            if (!/^[0-9]*$/.test(normalized)) return "Допустимы только цифры"
            if (!normalized.length) return true
            if (normalized.length < PHONE_MAX_LENGTH) {
                return "Введите номер полностью"
            }
            return true
        },
        onChange: (event) => {
            const digitsOnly = String(event.target.value).replace(/\D/g, "")
            event.target.value = digitsOnly
        },
    })

    const representativeInputProps = register(`contacts.phones.${index}.representativeName`)
    const error = formState.errors?.contacts?.phones?.[index]?.phone
    const errorMessage = typeof error?.message === "string" ? error.message : ""

    return {
        isPhoneFilled: String(phoneValue ?? "").length > 0,
        phoneInputProps: {
            ...phoneInputProps,
            maxLength: PHONE_MAX_LENGTH,
        },
        representativeInputProps,
        errorMessage,
    }
}
