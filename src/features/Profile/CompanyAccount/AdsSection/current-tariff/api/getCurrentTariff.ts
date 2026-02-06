import { AxiosClient } from "@/shared/api"
import type { CurrentTariffResponse } from "../model/types/current-tariff.types"

export const getCurrentTariff = async () => {
    const response = await AxiosClient.get<CurrentTariffResponse>(
        "/profile/company/ads/current-tariff"
    )

    return response.data
}
