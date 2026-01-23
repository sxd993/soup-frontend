'use client'

import { useMemo, type ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { CompanyAccountFormSkeleton } from '@/widgets/Profile/CompanyProfile'
import { CompanyReviewsSkeleton } from '@/features/Profile/CompanyAccount/ReviewsSection/get-company-reviews/ui/CompanyReviewsSkeleton'

const SidebarSkeleton = () => (
    <div className="w-[260px] flex flex-col gap-4">
        <div className="h-6 w-20 bg-gray-300 rounded" />
        <div className="h-6 w-20 bg-gray-300 rounded" />
        <div className="h-6 w-20 bg-gray-300 rounded" />
        <div className="h-6 w-20 bg-gray-300 rounded" />
        <div className="h-6 w-20 bg-gray-300 rounded" />
        <div className="h-6 w-20 bg-gray-300 rounded" />
        <div className="h-6 w-20 bg-gray-300 rounded" />
        <div className="h-6 w-20 bg-gray-300 rounded" />
    </div>
)

const GenericContentSkeleton = () => (
    <div className="flex-1 flex flex-col gap-4 max-w-[793px]">
        <div className="h-6 w-56 bg-gray-200 rounded" />
        <div className="h-32 bg-gray-200 rounded" />
        <div className="h-32 bg-gray-200 rounded" />
    </div>
)

const wrapProfileSkeleton = (content: ReactNode) => (
    <div className="flex gap-5 mt-[34px] animate-pulse" aria-busy="true" aria-live="polite">
        <SidebarSkeleton />
        {content}
    </div>
)

export const useSkeletons = () => {
    const pathname = usePathname()

    const profileSkeleton = useMemo(() => {
        if (pathname === '/profile/company/account') {
            return wrapProfileSkeleton(<CompanyAccountFormSkeleton />)
        }

        if (pathname === '/profile/company/reviews') {
            return wrapProfileSkeleton(<CompanyReviewsSkeleton />)
        }

        return wrapProfileSkeleton(<GenericContentSkeleton />)
    }, [pathname])

    return {
        profileSkeleton,
    }
}
