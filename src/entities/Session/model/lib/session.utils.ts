import type { AxiosInstance } from "axios";
import type { User, AuthSession } from "../types/session.types"
import type { MeResponse } from "../types/api.types"


// Преобразует ответ от /auth/me в формат User
export const mapMeResponseToUser = (meResponse: MeResponse): User => {
    return {
        id: meResponse.id ?? meResponse.sub ?? "",
        role: meResponse.role
    }
}

// Создает сессию из accessToken и MeResponse
export const createSessionFromData = (accessToken: string, meResponse: MeResponse): AuthSession => {
    return {
        user: mapMeResponseToUser(meResponse),
        accessToken
    }
}

// Получает полную сессию из accessToken (делает запрос /auth/me)
// Всегда возвращает валидную сессию
export const fetchSessionFromToken = async (
    accessToken: string,
    client: AxiosInstance
): Promise<Exclude<AuthSession, null>> => {
    const meResponse = await client.get<MeResponse>("/auth/me", {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    return createSessionFromData(accessToken, meResponse.data) as Exclude<AuthSession, null>;
}
