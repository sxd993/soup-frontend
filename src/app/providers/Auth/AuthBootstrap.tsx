'use client';

import { useSession } from "@/entities/Session/api/session.query";

export function AuthBootstrap() {
    useSession();
    return null;
}