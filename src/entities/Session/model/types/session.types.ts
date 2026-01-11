export type User = {
    id: string;
    email: string;
    name: string;
    role: "doer" | "client";
};

export type AuthSession = { user: User; accessToken: string } | null;

// Реэкспорт типов API
export type { MeResponse } from './api.types'