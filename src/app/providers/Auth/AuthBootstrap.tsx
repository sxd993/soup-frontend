'use client';

import { useSession } from "@/entities/Session/model/hooks/useSession";

export function AuthBootstrap() {
    useSession();
    return null;
}