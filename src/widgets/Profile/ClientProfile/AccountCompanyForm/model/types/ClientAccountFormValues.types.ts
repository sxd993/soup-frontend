import type {
    ClientContact,
    ClientNotificationSettings,
    ClientPrivacySettings,
} from "@/entities/Profile/Client"

export type ClientAccountFormValues = {
    profile: {
        full_name: string;
        city: string;
        avatar_url: string | null;
    };
    contacts: ClientContact[];
    notification_settings: ClientNotificationSettings;
    privacy_settings: ClientPrivacySettings;
}
