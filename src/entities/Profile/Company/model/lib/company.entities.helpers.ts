export const formatDate = (value?: string | null) => {
    if (!value) return null
    const date = new Date(value)
    if (Number.isNaN(date.getTime())) return null
    return date.toLocaleDateString("ru-RU", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    })
}

export const formatRating = (value?: number | string | null) => {
    if (value === null || value === undefined || value === "") return "—"
    if (typeof value === "number") return value.toFixed(1)
    const parsed = Number(value)
    return Number.isNaN(parsed) ? "—" : parsed.toFixed(1)
}