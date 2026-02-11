"use client"

export const CompanyOrdersEmpty = () => {
    return (
        <div className="flex min-h-[230px] rounded-[20px] flex-col items-center justify-center gap-4 bg-white">
            <div className="font-bold text-[16px] text-center sm:text-[22px] leading-[115%] text-black">
                У вашей компании пока нет заказов
            </div>
            <span className="text-[14px] sm:text-[16px] leading-[130%] text-center p-2 text-accent-septenary">
                Здесь появятся ваши заказы и их статусы
            </span>
        </div>
    )
}
