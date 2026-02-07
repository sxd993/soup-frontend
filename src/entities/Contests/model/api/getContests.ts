import { API_BASE_URL } from "@/shared/api"
import { ISR_REVALIDATE_SECONDS } from "@/shared/config/isr"
import type { ContestItem } from "@/entities/Contests"

type TimeParam = "week" | "month" | "all"

const timeQuery = (time?: TimeParam) => (time && time !== "all" ? `?time=${time}` : "")

const isr = { next: { revalidate: ISR_REVALIDATE_SECONDS } } as const

export const getCurrentContests = async (time?: TimeParam): Promise<ContestItem[]> => {
    try {
        const response = await fetch(`${API_BASE_URL}/contests/current${timeQuery(time)}`, isr)
        if (!response.ok) return []

        const data: unknown = await response.json()
        return Array.isArray(data) ? (data as ContestItem[]) : []
    } catch {
        return []
    }
}

export const getPastContests = async (time?: TimeParam): Promise<ContestItem[]> => {
    try {
        const response = await fetch(`${API_BASE_URL}/contests/past${timeQuery(time)}`, isr)
        if (!response.ok) return []

        const data: unknown = await response.json()
        return Array.isArray(data) ? (data as ContestItem[]) : []
    } catch {
        return []
    }
}
