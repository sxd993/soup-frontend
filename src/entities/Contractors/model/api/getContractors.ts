import { API_BASE_URL } from "@/shared/api"
import { ISR_REVALIDATE_SECONDS } from "@/shared/config/isr"
import type { ContractorsTypes } from "@/entities/Contractors"

export const getContractors = async (): Promise<ContractorsTypes[]> => {
    const response = await fetch(`${API_BASE_URL}/contractors`, {
        next: { revalidate: ISR_REVALIDATE_SECONDS },
    })
    return response.json()
}