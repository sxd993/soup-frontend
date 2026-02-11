type SearchParams = { [key: string]: string | string[] | undefined }

export type ReviewsPageParams = {
    currentPage: number
}

function parsePage(param: string | string[] | undefined): number {
    const num = typeof param === "string" ? parseInt(param, 10) : NaN
    return Number.isNaN(num) || num < 1 ? 1 : num
}

export function parseReviewsPageParams(params: SearchParams | null): ReviewsPageParams {
    return {
        currentPage: parsePage(params?.page),
    }
}
