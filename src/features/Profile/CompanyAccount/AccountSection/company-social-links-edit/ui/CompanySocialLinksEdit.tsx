'use client';
import { useEffect } from "react"
import { useFormContext } from "react-hook-form"
import { CompanyAccountAddButton } from "@/shared/ui/CompanyAccount/CompanyAccountAddButton"
import { CompanyAccountField } from "@/shared/ui/CompanyAccount/CompanyAccountField"
import { CompanyAccountFormBlock } from "@/shared/ui/CompanyAccount/CompanyAccountFormBlock"
import { CompanyAccountInput } from "@/shared/ui/CompanyAccount/CompanyAccountInput"
import { CompanyAccountSelect, type CompanyAccountSelectOption } from "@/shared/ui/CompanyAccount/CompanyAccountSelect"
import { socialLinksConfig, socialLinksOrder, type SocialField } from "../model/config/socialLinksConfig"
import { useCompanySocialLinks } from "../model/hooks/useCompanySocialLinks"
import type { CompanyAccountFormValues } from "@/widgets/Profile/CompanyProfile/AccountCompanyForm/model/types/CompanyAccountFormValues.types"

export const CompanySocialLinksEdit = () => {
    const { fields, isPickerOpen, allAdded, availableFields, togglePicker, addField, setFields } = useCompanySocialLinks()
    const { register, watch } = useFormContext<CompanyAccountFormValues>()
    const socials = watch("socials")

    useEffect(() => {
        if (!socials) return
        const next: Partial<Record<SocialField, boolean>> = {}
        socialLinksOrder.forEach((key) => {
            if (socials[key]) {
                next[key] = true
            }
        })
        if (Object.keys(next).length > 0) {
            setFields(next)
        }
    }, [setFields, socials])
    const selectOptions: CompanyAccountSelectOption[] = availableFields.map((key) => ({
        id: key,
        label: socialLinksConfig[key].label,
        icon: socialLinksConfig[key].iconLabel,
        onSelect: () => addField(key),
    }))

    return (
        <CompanyAccountFormBlock label="Сайт и соцсети">
            <div className="flex flex-col gap-3">
                {socialLinksOrder.map((key) => {
                    if (!fields[key]) {
                        return null
                    }
                    const { placeholder, iconLabel } = socialLinksConfig[key]
                    return (
                        <CompanyAccountField key={key} className="w-full items-center" icon={iconLabel}>
                            <div className="flex-1">
                                <CompanyAccountInput placeholder={placeholder} {...register(`socials.${key}`)} />
                            </div>
                        </CompanyAccountField>
                    )
                })}
                <div className="relative">
                    <CompanyAccountAddButton
                        className="mt-2 w-fit"
                        onClick={() => !allAdded && togglePicker()}
                        disabled={allAdded}
                    />
                    {isPickerOpen && !allAdded && (
                        <CompanyAccountSelect
                            className="absolute left-0 top-full mt-2"
                            options={selectOptions}
                        />
                    )}
                </div>
            </div>
        </CompanyAccountFormBlock>
    )
}
