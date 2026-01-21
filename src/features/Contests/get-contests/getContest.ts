import { API_BASE_URL } from "@/shared/api/config";
import { ContestItem } from "@/entities/Contests";

export const getCurrentContests = async (): Promise<ContestItem[]> => {
    const response = await fetch(`${API_BASE_URL}/contests/current`);
    return response.json();
};

export const getPastContests = async (): Promise<ContestItem[]> => {
    const response = await fetch(`${API_BASE_URL}/contests/past`);
    return response.json();
};