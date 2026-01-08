export type User = {
    id: string;
    email: string;
    name: string;
    role: "doer" | "client";
};

export type AuthSession = { user: User; accessToken: string } | null;