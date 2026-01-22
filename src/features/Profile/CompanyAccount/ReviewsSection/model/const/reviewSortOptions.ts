export type ReviewSortId = "newest" | "oldest" | "lowest-rating" | "highest-rating"

export type ReviewSortOption = {
    id: ReviewSortId
    label: string
}

export const REVIEW_SORT_OPTIONS: ReviewSortOption[] = [
    { id: "newest", label: "Сначала новые" },
    { id: "oldest", label: "Сначала старые" },
    { id: "lowest-rating", label: "Сначала с плохим рейтингом" },
    { id: "highest-rating", label: "Сначала с отличным рейтингом" },
]
