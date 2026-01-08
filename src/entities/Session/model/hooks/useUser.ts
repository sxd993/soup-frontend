import { useSession } from "./useSession";

export function useUser() {
    const { data } = useSession();
    return data?.user ?? null;
}