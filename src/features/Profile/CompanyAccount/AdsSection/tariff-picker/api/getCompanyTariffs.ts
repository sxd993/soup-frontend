import { AxiosClient } from "@/shared/api"
import type { CompanyTariffsResponse } from "../model/types/tariffs.types"

export const getCompanyTariffs = async () => {
    const response = await AxiosClient.get<CompanyTariffsResponse>(
        "/profile/company/ads/tariffs"
    )

    return response.data
}
