import { AxiosClient } from "@/shared/api"
import type { CompanyPublicResponse } from "../types/company-public.types"

export const getCompanyPublic = async (companyId: string): Promise<CompanyPublicResponse> => {
  const response = await AxiosClient.get<CompanyPublicResponse>(`/companies/${companyId}`)
  return response.data
}
