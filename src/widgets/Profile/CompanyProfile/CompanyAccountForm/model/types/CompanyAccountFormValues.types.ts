export interface CompanyAccountFormValues {
    profile: {
        logo: File | string | null;
        name: string;
        description: string;
        regions: string[];
        address: string;
    };
    contacts: {
        phones: {
            phone: string;
            representativeName?: string;
        }[];
        email: string;
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
