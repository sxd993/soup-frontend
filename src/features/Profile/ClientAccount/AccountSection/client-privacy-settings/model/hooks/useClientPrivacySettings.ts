'use client';

import { useState } from "react"

type PrivacyOption = "phone" | "email" | "telegram" | "none"

type PrivacyState = Record<PrivacyOption, boolean>

const initialState: PrivacyState = {
    phone: false,
    email: false,
    telegram: false,
    none: false,
}

export const useClientPrivacySettings = () => {
    const [settings, setSettings] = useState<PrivacyState>(initialState)

    const toggle = (option: PrivacyOption) => {
        setSettings((prev) => {
            if (option === "none") {
                return {
                    phone: false,
                    email: false,
                    telegram: false,
                    none: !prev.none,
                }
            }

            return {
                ...prev,
                [option]: !prev[option],
                none: false,
            }
        })
    }

    return { settings, toggle }
}
