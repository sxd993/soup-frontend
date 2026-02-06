import { API_BASE_URL } from "@/shared/api"

export type NewsTimeParam = "week" | "month" | "all"

export function buildNewsListUrl(time?: NewsTimeParam, badge?: string): string {
    const params = new URLSearchParams()
    if (time && time !== "all") params.set("time", time)
    if (badge) params.set("badge", badge)
    const query = params.toString()
    return query ? `${API_BASE_URL}/news?${query}` : `${API_BASE_URL}/news`
}
