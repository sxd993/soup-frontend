'use client';

import { useState } from "react"

type NotificationOption = "sms" | "email" | "none"

type NotificationsState = Record<NotificationOption, boolean>

const initialState: NotificationsState = {
    sms: false,
    email: false,
    none: false,
}

export const useClientNotificationsSettings = () => {
    const [settings, setSettings] = useState<NotificationsState>(initialState)

    const toggle = (option: NotificationOption) => {
        setSettings((prev) => {
            if (option === "none") {
                return {
                    sms: false,
                    email: false,
                    none: !prev.none,
                }
            }

            const nextValue = !prev[option]
            const next: NotificationsState = {
                ...prev,
                [option]: nextValue,
                none: false,
            }

            return next
        })
    }

    return { settings, toggle }
}
