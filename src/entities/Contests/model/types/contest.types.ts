// Тип для конкурса
export interface ContestItem {
    id: number;
    title: string;
    contestLink: string;
    imageUrl?: string;
    startDate: string;
    endDate: string;
}