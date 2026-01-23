export const formatOrderDate = (value?: string | null) => {
    if (!value) return "—"
    const date = new Date(value)
    if (Number.isNaN(date.getTime())) return "—"
    return new Intl.DateTimeFormat("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
    }).format(date)
}

export const formatOrderPrice = (value?: number | null) => {
    if (value === null || value === undefined) return "—"
    return `${new Intl.NumberFormat("ru-RU").format(value)} ₽`
}
