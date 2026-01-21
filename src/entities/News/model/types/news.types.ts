// Тип для новости
export interface NewsItem {
    id: string;
    image: string;
    imageAlt: string;
    category: string;
    author: string;
    title: string;
    description?: string;
    createdAt?: string;
    content?: string[];
    isAds?: boolean;
    isImportantNew?: boolean;
}