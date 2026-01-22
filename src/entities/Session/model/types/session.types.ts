export type User = {
    id: string;
    role: "company" | "client";
};

export type AuthSession = { user: User; accessToken: string } | null;

// Реэкспорт типов API
export type { MeResponse } from './api.types'
