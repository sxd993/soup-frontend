// Тип для конкурса
export interface ContestItem {
    id: number;
    title: string;
    contestLink: string;
    imageUrl?: string;
    description?: string;
    startDate?: string;
    endDate?: string;
    result?: string;
    isPublished: boolean;
    createdAt: string;
}