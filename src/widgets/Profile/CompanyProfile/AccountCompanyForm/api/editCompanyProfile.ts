import type { CompanyAccountFormValues } from "../model/types/CompanyAccountFormValues.types"
import { AxiosClient } from "@/shared/api/AxiosClient"

export const editCompanyProfile = async (data: CompanyAccountFormValues): Promise<void> => {
    await AxiosClient.post("/profile/company", data)
}
