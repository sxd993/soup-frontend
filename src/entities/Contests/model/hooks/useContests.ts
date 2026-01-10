import { useQuery } from "@tanstack/react-query";
import { getContests } from "../api/contests.api";
import type { ContestItem } from "../types/contest.types";

// Хук для получения списка конкурсов {кеширует данные, управляет состояниями загрузки/ошибок}
export const useContests = () => {
    return useQuery<ContestItem[]>({
        queryKey: ["contests"],
        queryFn: getContests,
        staleTime: 5 * 60 * 1000, // Данные считаются свежими 5 минут
    });
};