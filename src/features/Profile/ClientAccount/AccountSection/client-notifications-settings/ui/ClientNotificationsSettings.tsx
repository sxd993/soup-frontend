'use client';

import { AccountFormBlock, ClientAccountCheckbox } from "@/shared/ui"
import { NOTIFICATION_OPTIONS } from "../model/const/notificationOptions"
import { useClientNotificationsSettings } from "../model/hooks/useClientNotificationsSettings"

export const ClientNotificationsSettings = () => {
    const { settings, toggle } = useClientNotificationsSettings()

    return (
        <AccountFormBlock label="Уведомления о новых откликах">
            <div className="flex flex-col gap-4.5">
                {NOTIFICATION_OPTIONS.map((option) => (
                    <label key={option.id} className="flex items-end cursor-pointer gap-3.25">
                        <ClientAccountCheckbox
                            checked={settings[option.id]}
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
