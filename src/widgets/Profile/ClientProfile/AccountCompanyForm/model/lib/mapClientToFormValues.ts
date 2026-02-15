import type { ClientProfileResponse } from "@/entities/Profile/Client"
import type { ClientAccountFormValues } from "../types/ClientAccountFormValues.types"

const normalizeContacts = (contacts: ClientProfileResponse["contacts"]) => {
    const source = Array.isArray(contacts) ? contacts : []

    const byType = source.reduce<Record<string, { type: "phone" | "email" | "telegram" | "max"; value: string }>>((acc, item) => {
        if (!item?.type) return acc
        if (acc[item.type]) return acc
        acc[item.type] = {
            type: item.type,
            value: item.value ?? "",
        }
        return acc
    }, {})

    if (!byType.phone) {
        byType.phone = { type: "phone", value: "" }
    }

    if (!byType.email) {
        byType.email = { type: "email", value: "" }
    }

    const ordered: ClientAccountFormValues["contacts"] = []
    if (byType.phone) ordered.push(byType.phone)
    if (byType.email) ordered.push(byType.email)
    if (byType.telegram) ordered.push(byType.telegram)
    if (byType.max) ordered.push(byType.max)

    return ordered
}

export const mapClientToFormValues = (client: ClientProfileResponse): ClientAccountFormValues => {
    return {
        profile: {
            full_name: client.full_name ?? "",
            city: client.city ?? "",
            avatar_url: client.avatar_url ?? null,
        },
        contacts: normalizeContacts(client.contacts),
        notification_settings: {
            sms: Boolean(client.notification_settings?.sms),
            email: Boolean(client.notification_settings?.email),
        },
        privacy_settings: {
            phone: Boolean(client.privacy_settings?.phone),
            email: Boolean(client.privacy_settings?.email),
            social_links: Boolean(client.privacy_settings?.social_links),
        },
    }
}
