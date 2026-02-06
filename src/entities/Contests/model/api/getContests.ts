import { API_BASE_URL } from "@/shared/api"
import type { ContestItem } from "@/entities/Contests"

type TimeParam = "week" | "month" | "all"

const timeQuery = (time?: TimeParam) => (time && time !== "all" ? `?time=${time}` : "")

export const getCurrentContests = async (time?: TimeParam): Promise<ContestItem[]> => {
    const response = await fetch(`${API_BASE_URL}/contests/current${timeQuery(time)}`)
    return response.json()
}

export const getPastContests = async (time?: TimeParam): Promise<ContestItem[]> => {
    const response = await fetch(`${API_BASE_URL}/contests/past${timeQuery(time)}`)
    return response.json()
}