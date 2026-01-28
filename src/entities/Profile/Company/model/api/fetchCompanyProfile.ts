import { AxiosClient } from "@/shared/api"
import type { CompanyProfileResponse } from "../types/company.types"


export const fetchCompanyProfile = async (): Promise<CompanyProfileResponse> => {
    const response = await AxiosClient.get<CompanyProfileResponse>("/profile/company")
    return response.data
}
