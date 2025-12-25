export interface NewsItem {
    id: string;
    image: string;
    imageAlt: string;
    badge: string;
    title: string;
    description?: string;
    date?: string;
    content?: string[];
    isAds?: boolean;
    isImportantNew?: boolean;
}
