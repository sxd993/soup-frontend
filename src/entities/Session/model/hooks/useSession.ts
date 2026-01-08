import type { AuthSession } from "../types/session.types";
import { AxiosClient } from "@/shared/api/AxiosClient";
import { useQuery } from "@tanstack/react-query";

export function useSession() {
    return useQuery<AuthSession>({
        queryKey: ["session"],
        queryFn: async () => {
            const res = await AxiosClient.post("/auth/refresh");
            return res.data;
        }
    });
}

