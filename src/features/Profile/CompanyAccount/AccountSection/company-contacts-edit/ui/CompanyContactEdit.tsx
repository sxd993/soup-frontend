'use client';
import { CompanyAccountAddButton } from "@/shared/ui/CompanyAccount/CompanyAccountAddButton"
import { CompanyAccountFormBlock } from "@/shared/ui/CompanyAccount/CompanyAccountFormBlock"
import { CompanyAccountSelect, type CompanyAccountSelectOption } from "@/shared/ui/CompanyAccount/CompanyAccountSelect"
import { EmailIcon } from "@/shared/ui/CompanyAccount/icons/EmailIcon"
import { PhoneIcon } from "@/shared/ui/CompanyAccount/icons/PhoneIcon"
import { useCompanyContactFields } from "../model/hooks/useCompanyContactFields"
import { CompanyEmailInput, CompanyPhoneInput } from "./labels"

export const CompanyContactEdit = () => {
    const { counts, isPickerOpen, allAdded, availableFields, togglePicker, addField } = useCompanyContactFields()
    const selectOptions: CompanyAccountSelectOption[] = availableFields.map((field) => ({
        id: field,
        label: field === "phone" ? "Телефон" : "Почта",
        icon: field === "phone" ? <PhoneIcon /> : <EmailIcon />,
        onSelect: () => addField(field),
    }))

    return (
        <CompanyAccountFormBlock label="Телефон и почта">

            {/* По дефолту 2 поля уже есть */}
            {Array.from({ length: counts.phone }, (_, index) => (
                <CompanyPhoneInput key={`phone-${index}`} />
            ))}
            {Array.from({ length: counts.email }, (_, index) => (
                <CompanyEmailInput key={`email-${index}`} />
            ))}

            <div className="relative">
                {/* Кнопка добавить поле*/}
                <CompanyAccountAddButton
                    className="mt-3"
                    onClick={() => !allAdded && togglePicker()}
                    disabled={allAdded}
                />
                {/* Поле селекта*/}
                {isPickerOpen && !allAdded && (
                    <CompanyAccountSelect
                        className="absolute left-0 top-full mt-2"
                        options={selectOptions}
                    />
                )}
            </div>
        </CompanyAccountFormBlock>
    )
}
