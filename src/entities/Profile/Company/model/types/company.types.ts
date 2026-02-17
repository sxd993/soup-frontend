export type CompanyCardData = {
  id: string
  name: string
  description: string
  logoUrl?: string | null
  /** Средний рейтинг 0–5 для отображения звёзд */
  rating?: number
  /** Количество отзывов */
  reviewsCount?: number
}

export type CompanyReview = {
    id: string | number
    /** Идентификатор пользователя (user_id), чтобы выделять свой отзыв */
    authorId?: string | null
    authorName?: string | null
    authorAvatarUrl?: string | null
    rating?: number | string | null
    comment?: string | null
    createdAt?: string | null
    serviceName?: string | null
    /** URL фотографий отзыва (хранилище reviews/{companyId}/{reviewId}/) */
    imageUrls?: string[] | null
    reply?: {
        id: string | number
        authorId: string
        companyId: string | number
        replyText: string
        createdAt: string
    } | null
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
