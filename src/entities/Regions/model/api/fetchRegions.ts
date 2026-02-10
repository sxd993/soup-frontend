import { AxiosClient } from "@/shared/api"
import type { RegionItemType } from "../types/RegionItemType"

export const fetchRegions = async (): Promise<RegionItemType[]> => {
  const response = await AxiosClient.get<RegionItemType[]>("/regions")
  return response.data
}

