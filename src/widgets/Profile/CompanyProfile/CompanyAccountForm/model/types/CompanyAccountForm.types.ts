export interface CompanyAccountFormValues {
    profile: {
        logo: File | string | null;
        name: string;
        description: string;
        regions: string[];
    };
    contacts: {
        phones: string[];
        email: string;
        representativeName: string;
    };
    socials: {
        website: string;
        vk: string;
        youtube: string;
        whatsapp: string;
        telegram: string;
        yandexDzen: string;
    };
}
