'use client';

import { AccountFormBlock, ClientAccountCheckbox } from "@/shared/ui"
import { PRIVACY_OPTIONS } from "../model/const/privacyOptions"
import { useClientPrivacySettings } from "../model/hooks/useClientPrivacySettings"

export const ClientPrivacySettings = () => {
    const { settings, toggle } = useClientPrivacySettings()

    return (
        <AccountFormBlock label="Показывать контакты компаниям">
            <div className="flex flex-col gap-4.5">
                {PRIVACY_OPTIONS.map((option) => (
                    <label key={option.id} className="flex cursor-pointer items-center gap-3.25">
                        <ClientAccountCheckbox
                            checked={settings[option.id]}
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
