import { AxiosClient } from "@/shared/api"
import type { ClientAccountFormValues } from "../model/types/ClientAccountFormValues.types"

export const editClientProfile = async (data: ClientAccountFormValues): Promise<void> => {
    await AxiosClient.post("/profile/client", data)
}
