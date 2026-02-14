'use client';

import { AccountFormBlock } from "@/shared/ui"
import { ClientAccountCheckbox } from "@/shared/ui/ClientAccount"
import { useFormContext, useWatch } from "react-hook-form"
import type { ClientAccountFormValues } from "@/widgets/Profile/ClientProfile/AccountCompanyForm/model"
import { PRIVACY_OPTIONS } from "../model/const/privacyOptions"

export const ClientPrivacySettings = () => {
    const { control, setValue } = useFormContext<ClientAccountFormValues>()
    const settings = useWatch({ control, name: "privacy_settings" })

    const toggle = (option: "phone" | "email" | "social_links") => {
        setValue(`privacy_settings.${option}`, !Boolean(settings?.[option]), { shouldDirty: true })
    }

    return (
        <AccountFormBlock label="Показывать контакты компаниям">
            <div className="flex flex-col gap-4.5">
                {PRIVACY_OPTIONS.map((option) => (
                    <label key={option.id} className="flex cursor-pointer items-center gap-3.25">
                        <ClientAccountCheckbox
                            checked={Boolean(settings?.[option.id])}
                            onChange={() => toggle(option.id)}
                        />
                        <span className="flex min-h-5 items-center">
                            <span className="block leading-none text-[#5f5f5f] text-base">
                                {option.label}
                            </span>
                        </span>
                    </label>
                ))}
            </div>
        </AccountFormBlock>
    )
}
