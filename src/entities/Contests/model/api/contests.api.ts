import { AxiosClient } from "@/shared/api/AxiosClient";
import type { ContestItem } from "../types/contest.types";

// Получить список опубликованных конкурсов
export const getContests = async (): Promise<ContestItem[]> => {
    const response = await AxiosClient.get<ContestItem[]>('/contests');
    return response.data;
};

// Получить конкурс по id
export const getContestById = async (id: number): Promise<ContestItem> => {
    const response = await AxiosClient.get<ContestItem>(`/contests/${id}`);
    return response.data;
};