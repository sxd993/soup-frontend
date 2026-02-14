import { AxiosClient } from "@/shared/api"
import type { ClientProfileResponse } from "../types/client.types"

export const fetchClientProfile = async (): Promise<ClientProfileResponse> => {
    const response = await AxiosClient.get<ClientProfileResponse>("/profile/client")
    return response.data
}
