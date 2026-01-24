import { formatDate } from "@/shared/lib"


export const formatOrderDate = (value?: string | null) => {
    if (!value) return "—"
    return formatDate(value)
}

export const formatOrderPrice = (value?: number | null) => {
    if (value === null || value === undefined) return "—"
    return `${new Intl.NumberFormat("ru-RU").format(value)} ₽`
}
