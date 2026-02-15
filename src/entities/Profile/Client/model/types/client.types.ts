export type ClientContactType = "phone" | "email" | "telegram" | "max"

export type ClientContact = {
    type: ClientContactType;
    value: string;
}

export type ClientNotificationSettings = {
    sms: boolean;
    email: boolean;
}

export type ClientPrivacySettings = {
    phone: boolean;
    email: boolean;
    social_links: boolean;
}

export type ClientProfileResponse = {
    clientId?: number;
    userId?: string;
    full_name?: string | null;
    city?: string | null;
    avatar_url?: string | null;
    contacts?: ClientContact[] | null;
    notification_settings?: ClientNotificationSettings | null;
    privacy_settings?: ClientPrivacySettings | null;
}
