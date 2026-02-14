'use client';

import { AccountFormBlock } from "@/shared/ui"
import { ClientAccountCheckbox } from "@/shared/ui/ClientAccount"
import { useFormContext, useWatch } from "react-hook-form"
import type { ClientAccountFormValues } from "@/widgets/Profile/ClientProfile/AccountCompanyForm/model"
import { NOTIFICATION_OPTIONS } from "../model/const/notificationOptions"

export const ClientNotificationsSettings = () => {
    const { control, setValue } = useFormContext<ClientAccountFormValues>()
    const settings = useWatch({ control, name: "notification_settings" })

    const toggle = (option: "sms" | "email") => {
        setValue(`notification_settings.${option}`, !Boolean(settings?.[option]), { shouldDirty: true })
    }

    return (
        <AccountFormBlock label="Уведомления о новых откликах">
            <div className="flex flex-col gap-4.5">
                {NOTIFICATION_OPTIONS.map((option) => (
                    <label key={option.id} className="flex items-end cursor-pointer gap-3.25">
                        <ClientAccountCheckbox
                            checked={Boolean(settings?.[option.id])}
                            onChange={() => toggle(option.id)}
                        />
                        <span className="flex min-h-5 items-start">
                            <span className="block text-base leading-none text-[#5f5f5f]">
                                {option.label}
                            </span>
                        </span>
                    </label>
                ))}
            </div>
        </AccountFormBlock>
    )
}
