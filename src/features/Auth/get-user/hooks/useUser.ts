import { useSession } from "@/entities/Session/api/session.query";

export function useUser() {
    const { data } = useSession();
    return data?.user ?? null;
}