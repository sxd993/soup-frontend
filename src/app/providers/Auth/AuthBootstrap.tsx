'use client';

import { useSession } from "@/entities/Session/model/hooks/useSession";

export function AuthBootstrap() {
    useSession();
    const data = useSession()
    console.log(data)
    return null;
}