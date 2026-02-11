import { CompanyReviewsSection, parseReviewsPageParams } from "@/widgets/Profile/CompanyProfile"

type PageProps = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function CompanyReviewsPage({ searchParams }: PageProps) {
    const params = await searchParams
    const { currentPage } = parseReviewsPageParams(params)

    return <CompanyReviewsSection currentPage={currentPage} />
}
