'use client';

import { useState } from "react"

type NotificationOption = "sms" | "email"

type NotificationsState = Record<NotificationOption, boolean>

const initialState: NotificationsState = {
    sms: false,
    email: false,
}

export const useClientNotificationsSettings = () => {
    const [settings, setSettings] = useState<NotificationsState>(initialState)

    const toggle = (option: NotificationOption) => {
        setSettings((prev) => {
            return {
                ...prev,
                [option]: !prev[option],
            }
        })
    }

    return { settings, toggle }
}
