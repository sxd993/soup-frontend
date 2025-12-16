export interface NewsItem {
    id: string;
    image: string;
    imageAlt: string;
    secondImage?: string;
    badge: string;
    title: string;
    description?: string;
    date?: string;
    content?: string[];
}
