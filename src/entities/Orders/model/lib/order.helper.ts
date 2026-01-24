export const formatOrderDate = (date?: string | null) => {
    if (!date) return "—"
    const parsed = new Date(date)
    if (Number.isNaN(parsed.getTime())) return "—"
    return parsed.toLocaleDateString("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
    })
}

export const formatOrderPrice = (price?: number | null) => {
    if (price === null || price === undefined) return "—"
    return `${price} ₽`
}
