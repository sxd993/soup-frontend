import type { ReactNode } from "react"
import { WebSiteIcon, VkIcon, YtIcon, WhtspIcon, TgIcon, YndDzenIcon } from "@/shared/ui/CompanyAccount/icons/AccountSectionIcons"

export type SocialField = "website" | "vk" | "youtube" | "whatsapp" | "telegram" | "yandexDzen"

export const socialLinksOrder: SocialField[] = [
    "website",
    "vk",
    "youtube",
    "whatsapp",
    "telegram",
    "yandexDzen",
]

export const socialLinksConfig: Record<SocialField, { label: string; placeholder: string; iconLabel: ReactNode }> =
{
    website: { label: "Веб-сайт", placeholder: "Веб-сайт", iconLabel: <WebSiteIcon /> },
    vk: { label: "Вконтакте", placeholder: "Вконтакте", iconLabel: <VkIcon /> },
    youtube: { label: "YouTube", placeholder: "YouTube", iconLabel: <YtIcon /> },
    whatsapp: { label: "WhatsApp", placeholder: "WhatsApp", iconLabel: <WhtspIcon /> },
    telegram: { label: "Telegram", placeholder: "Telegram", iconLabel: <TgIcon /> },
    yandexDzen: { label: "Яндекс Дзен", placeholder: "Яндекс Дзен", iconLabel: <YndDzenIcon /> },
}
