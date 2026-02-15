'use client';

import { useMemo, useState } from "react"
import { AccountAddButton, AccountFormBlock, AccountSelect, type AccountSelectOption } from "@/shared/ui"
import { MaxIcon } from "@/shared/ui/ClientAccount"
import { EmailIcon } from "@/shared/ui/CompanyAccount/icons/AccountSectionIcons/EmailIcon"
import { PhoneIcon } from "@/shared/ui/CompanyAccount/icons/AccountSectionIcons/PhoneIcon"
import { TgIcon } from "@/shared/ui/CompanyAccount/icons/AccountSectionIcons/TgIcon"
import { useFormContext, useWatch } from "react-hook-form"
import { ClientEmailInput, ClientMaxInput, ClientPhoneInput, ClientTelegramInput } from "./labels"
import type { ClientAccountFormValues } from "@/widgets/Profile/ClientProfile/AccountCompanyForm/model"
import type { ClientContactType } from "@/entities/Profile/Client"

const FIELD_LABELS = {
    phone: "Телефон",
    email: "Почта",
    telegram: "Telegram",
    max: "Max",
} as const

const FIELD_ICONS = {
    phone: <PhoneIcon color="#2F2F2F" />,
    email: <EmailIcon isActive />,
    telegram: <TgIcon color="#2F2F2F" />,
    max: <MaxIcon color="#2F2F2F" />,
} as const

export const ClientContactEdit = () => {
    const [isPickerOpen, setIsPickerOpen] = useState(false)
    const { control, setValue } = useFormContext<ClientAccountFormValues>()
    const contacts = useWatch({ control, name: "contacts" }) ?? []

    const indexByType = useMemo(() => {
        return contacts.reduce<Partial<Record<ClientContactType, number>>>((acc, item, index) => {
            if (item?.type && acc[item.type] === undefined) {
                acc[item.type] = index
            }
            return acc
        }, {})
    }, [contacts])

    const availableFields = useMemo<ClientContactType[]>(() => {
        const all: ClientContactType[] = ["phone", "email", "telegram", "max"]
        return all.filter((type) => indexByType[type] === undefined)
    }, [indexByType])

    const allAdded = availableFields.length === 0

    const addField = (type: ClientContactType) => {
        setValue("contacts", [...contacts, { type, value: "" }], { shouldDirty: true })
        setIsPickerOpen(false)
    }

    const selectOptions: AccountSelectOption[] = availableFields.map((field) => ({
        id: field,
        label: FIELD_LABELS[field],
        icon: FIELD_ICONS[field],
        onSelect: () => addField(field),
    }))

    return (
        <AccountFormBlock label="Контакты">
            {indexByType.phone !== undefined && <ClientPhoneInput key={`phone-${indexByType.phone}`} index={indexByType.phone} />}

            {indexByType.email !== undefined && <ClientEmailInput key={`email-${indexByType.email}`} index={indexByType.email} />}

            {indexByType.telegram !== undefined && <ClientTelegramInput key={`telegram-${indexByType.telegram}`} index={indexByType.telegram} />}

            {indexByType.max !== undefined && <ClientMaxInput key={`max-${indexByType.max}`} index={indexByType.max} />}

            <div className="relative">
                <AccountAddButton
                    onClick={() => !allAdded && setIsPickerOpen((prev) => !prev)}
                    disabled={allAdded}
                />
                {isPickerOpen && !allAdded && (
                    <AccountSelect
                        className="absolute left-0 top-full mt-2"
                        options={selectOptions}
                    />
                )}
            </div>
        </AccountFormBlock>
    )
}
