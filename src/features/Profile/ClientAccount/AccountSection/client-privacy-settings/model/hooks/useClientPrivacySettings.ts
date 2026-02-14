'use client';

import { useState } from "react"

type PrivacyOption = "phone" | "email" | "social_links"

type PrivacyState = Record<PrivacyOption, boolean>

const initialState: PrivacyState = {
    phone: false,
    email: false,
    social_links: false,
}

export const useClientPrivacySettings = () => {
    const [settings, setSettings] = useState<PrivacyState>(initialState)

    const toggle = (option: PrivacyOption) => {
        setSettings((prev) => {
            return {
                ...prev,
                [option]: !prev[option],
            }
        })
    }

    return { settings, toggle }
}
