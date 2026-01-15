import { API_BASE_URL } from "@/shared/api/config";
import type { ContestItem } from "../types/contest.types";

// Получить список опубликованных конкурсов
export const getContests = async (): Promise<ContestItem[]> => {
    const response = await fetch(`${API_BASE_URL}contests`);
    return response.json();
};