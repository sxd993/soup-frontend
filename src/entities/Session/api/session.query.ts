import type { AuthSession } from "../model/session.types";
import { client } from "@/shared/api/client";
import { useQuery } from "@tanstack/react-query";

export function useSession() {
    return useQuery<AuthSession>({
        queryKey: ["session"],
        queryFn: async () => {
            const res = await client.post("/auth/refresh");
            return res.data;
        }
    });
}

