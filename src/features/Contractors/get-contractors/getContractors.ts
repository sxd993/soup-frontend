import { API_BASE_URL } from "@/shared/api/config";
import type { ContractorsTypes } from "@/entities/Contractors";

// Получить список подрядчиков
export const getContractors = async (): Promise<ContractorsTypes[]> => {
    const response = await fetch(`${API_BASE_URL}/contractors`);
    return response.json();
};