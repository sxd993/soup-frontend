import { AxiosClient } from "@/shared/api"
import type { CompanyProfileResponse } from "@/entities/Profile/Company/model/types/company.types"

export const uploadCompanyLogo = async (file: File): Promise<CompanyProfileResponse> => {
    const formData = new FormData()
    formData.append("logo", file)

    const response = await AxiosClient.post<CompanyProfileResponse>("profile/company", formData)
    return response.data
}
