import { AxiosClient } from "@/shared/api"
import type { CompanyServiceCategory, CompanyServicesResponse } from "../types/company-services.types"

export const getCompanyServices = async (): Promise<CompanyServicesResponse> => {
  const response = await AxiosClient.get<CompanyServicesResponse>("/profile/company/services")
  return response.data
}

export const saveCompanyServices = async (categories: CompanyServiceCategory[]) => {
  return AxiosClient.post("/profile/company/services", { categories })
}

export const uploadCompanyServiceImage = async (file: File): Promise<{ url: string }> => {
  const formData = new FormData()
  formData.append("image", file)
  const response = await AxiosClient.post<{ url: string }>(
    "/profile/company/services/upload-image",
    formData,
  )
  return response.data
}
