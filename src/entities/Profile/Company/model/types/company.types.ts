export type CompanyCardData = {
  id: string
  name: string
  rating: string
  reviews: string
  city: string
  description: string
}

export type CompanyReview = {
    id: string | number
    authorName?: string | null
    authorAvatarUrl?: string | null
    rating?: number | string | null
    comment?: string | null
    createdAt?: string | null
    serviceName?: string | null
}

export type CompanySocialLinks = {
    website?: string | null;
    vk?: string | null;
    youtube?: string | null;
    whatsapp?: string | null;
    telegram?: string | null;
    yandexDzen?: string | null;
}

export type CompanyPhone = {
    phone: string;
    representativeName?: string | null;
}

export type CompanyProfileResponse = {
    companyId?: number;
    userId?: string | null;
    logo_url?: string | null;
    name?: string | null;
    description?: string | null;
    regions?: string[] | string | null;
    social_links?: CompanySocialLinks | null;
    address?: string | null;
    phones?: CompanyPhone[] | string[] | null;
    emails?: string[] | null;
    email?: string | null;
    representativeName?: string | null;
}
