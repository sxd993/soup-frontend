import { API_BASE_URL } from "@/shared/api/config";
import { ContestItem } from "@/entities/Contests";

export const getContests = async (): Promise<ContestItem[]> => {
    const response = await fetch(`${API_BASE_URL}/contests`);
    return response.json();
};