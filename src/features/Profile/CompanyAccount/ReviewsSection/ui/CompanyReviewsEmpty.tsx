"use client"

export const CompanyReviewsEmpty = () => {
    return (
        <div className="flex min-h-[240px] flex-col items-center justify-center gap-2 rounded-3xl border border-dashed border-[#E5E0D6] bg-white p-8 text-center">
            <p className="text-base font-semibold text-secondary">Отзывов пока нет</p>
            <p className="text-sm text-accent-quinary">Когда клиенты оставят отзывы, они появятся здесь.</p>
        </div>
    )
}
