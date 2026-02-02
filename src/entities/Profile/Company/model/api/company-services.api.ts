import { AxiosClient } from "@/shared/api"
import type { CompanyServiceCategory, CompanyServicesResponse } from "../types/company-services.types"

export const getCompanyServices = async (): Promise<CompanyServicesResponse> => {
  const response = await AxiosClient.get<CompanyServicesResponse>("/profile/company/services")
  return response.data
}

export const saveCompanyServices = async (categories: CompanyServiceCategory[]) => {
  return AxiosClient.post("/profile/company/services", { categories })
}
