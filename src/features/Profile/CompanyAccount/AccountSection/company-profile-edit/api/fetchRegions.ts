import { AxiosClient } from "@/shared/api/AxiosClient"
import { RegionItemType } from '../model/types/RegionItemType'

export const fetchRegions = async (): Promise<RegionItemType[]> => {
    const response = await AxiosClient.get<RegionItemType[]>("/regions")
    return response.data
}