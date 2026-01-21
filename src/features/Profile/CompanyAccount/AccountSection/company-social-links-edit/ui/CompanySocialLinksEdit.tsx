'use client';
import { CompanyAccountAddButton } from "@/shared/ui/CompanyAccount/CompanyAccountAddButton"
import { CompanyAccountField } from "@/shared/ui/CompanyAccount/CompanyAccountField"
import { CompanyAccountFormBlock } from "@/shared/ui/CompanyAccount/CompanyAccountFormBlock"
import { CompanyAccountInput } from "@/shared/ui/CompanyAccount/CompanyAccountInput"
import { CompanyAccountSelect, type CompanyAccountSelectOption } from "@/shared/ui/CompanyAccount/CompanyAccountSelect"
import { socialLinksConfig, socialLinksOrder } from "../model/config/socialLinksConfig"
import { useCompanySocialLinks } from "../model/hooks/useCompanySocialLinks"

export const CompanySocialLinksEdit = () => {
    const { fields, isPickerOpen, allAdded, availableFields, togglePicker, addField } = useCompanySocialLinks()
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
                                <CompanyAccountInput placeholder={placeholder} />
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
