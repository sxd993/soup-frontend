import type { CompanyReview } from "@/entities/Profile/Company/model/types/company.types"

const getTimeValue = (value?: string | null) => {
    if (!value) return 0
    const time = new Date(value).getTime()
    return Number.isNaN(time) ? 0 : time
}

const getRatingValue = (value?: number | string | null) => {
    if (value === null || value === undefined) return 0
    if (typeof value === "number") return value
    const parsed = Number(value)
    return Number.isNaN(parsed) ? 0 : parsed
}

export const sortReviews = (reviews: CompanyReview[], sortId: string) => {
    const sorted = [...reviews]

    switch (sortId) {
        case "oldest":
            return sorted.sort((a, b) => getTimeValue(a.createdAt) - getTimeValue(b.createdAt))
        case "lowest-rating":
            return sorted.sort((a, b) => getRatingValue(a.rating) - getRatingValue(b.rating))
        case "highest-rating":
            return sorted.sort((a, b) => getRatingValue(b.rating) - getRatingValue(a.rating))
        case "newest":
        default:
            return sorted.sort((a, b) => getTimeValue(b.createdAt) - getTimeValue(a.createdAt))
    }
}
