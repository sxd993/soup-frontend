"use client"


// Пустые звездочки для отзывов
const EmptyStarIcon = () => {
    return (
        <svg width="43" height="41" viewBox="0 0 43 41" fill="#eeebe6" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.1826 0.691213C20.4819 -0.230098 21.7854 -0.2301 22.0847 0.691211L26.388 13.9354C26.5219 14.3474 26.9058 14.6263 27.339 14.6263H41.2648C42.2335 14.6263 42.6363 15.866 41.8525 16.4354L30.5864 24.6207C30.2359 24.8753 30.0893 25.3267 30.2231 25.7387L34.5264 38.9829C34.8258 39.9042 33.7713 40.6703 32.9876 40.1009L21.7214 31.9156C21.3709 31.6609 20.8963 31.6609 20.5459 31.9156L9.27972 40.1009C8.49601 40.6703 7.44152 39.9042 7.74088 38.9829L12.0442 25.7387C12.178 25.3267 12.0314 24.8753 11.6809 24.6207L0.414746 16.4354C-0.368967 15.866 0.0338051 14.6263 1.00253 14.6263H14.9282C15.3615 14.6263 15.7454 14.3474 15.8793 13.9354L20.1826 0.691213Z" fill="#EEEBE6" />
        </svg>
    )
}

export const CompanyReviewsEmpty = () => {
    return (
        <div className="flex min-h-[230px] rounded-[20px] flex-col items-center justify-center gap-[39px]  bg-white">
            <div className="font-bold text-[22px] leading-[115%] text-black">
                У вашей компании пока нет отзывов
            </div>

            <div className="flex gap-[6px]">
                <EmptyStarIcon />
                <EmptyStarIcon />
                <EmptyStarIcon />
                <EmptyStarIcon />
                <EmptyStarIcon />
            </div>
        </div>
    )
}
