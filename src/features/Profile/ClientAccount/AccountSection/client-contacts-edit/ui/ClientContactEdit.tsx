'use client';

import { AccountFormBlock, CompanyAccountAddButton, CompanyAccountSelect, type CompanyAccountSelectOption } from "@/shared/ui"
import { useClientContactFields } from "../model/hooks/useClientContactFields"
import { ContactPlaceholderIcon } from "./labels/ContactPlaceholderIcon"
import { ClientEmailInput, ClientMaxInput, ClientPhoneInput, ClientTelegramInput } from "./labels"

const FIELD_LABELS = {
    phone: "Телефон",
    email: "Почта",
    telegram: "Telegram",
    max: "Max",
} as const

const FIELD_ICONS = {
    phone: <ContactPlaceholderIcon label="P" />,
    email: <ContactPlaceholderIcon label="@" />,
    telegram: <ContactPlaceholderIcon label="TG" />,
    max: <ContactPlaceholderIcon label="M" />,
} as const

export const ClientContactEdit = () => {
    const { counts, isPickerOpen, allAdded, availableFields, togglePicker, addField } = useClientContactFields()

    const selectOptions: CompanyAccountSelectOption[] = availableFields.map((field) => ({
        id: field,
        label: FIELD_LABELS[field],
        icon: FIELD_ICONS[field],
        onSelect: () => addField(field),
    }))

    return (
        <AccountFormBlock label="Контакты">
            {Array.from({ length: counts.phone }, (_, index) => (
                <ClientPhoneInput key={`phone-${index}`} />
            ))}

            {Array.from({ length: counts.email }, (_, index) => (
                <ClientEmailInput key={`email-${index}`} />
            ))}

            {Array.from({ length: counts.telegram }, (_, index) => (
                <ClientTelegramInput key={`telegram-${index}`} />
            ))}

            {Array.from({ length: counts.max }, (_, index) => (
                <ClientMaxInput key={`max-${index}`} />
            ))}

            <div className="relative">
                <CompanyAccountAddButton
                    className="mt-3"
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
        </AccountFormBlock>
    )
}
