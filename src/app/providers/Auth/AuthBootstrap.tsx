'use client';

import { useSession } from "@/entities/Session";

export function AuthBootstrap() {
    useSession();
    return null;
}