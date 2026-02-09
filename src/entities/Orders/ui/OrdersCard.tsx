import Image from 'next/image'
import type { Order } from "../model/type/order.types"
import { useOrdersCard } from "../model/hooks/useOrdersCard"

type OrdersCardProps = {
    order: Order
}

export const OrdersCard = ({ order }: OrdersCardProps) => {
    const { title, region, price, createdAt, logoUrl, hasLogo, initials } = useOrdersCard(order)

    return (
        <article className="rounded-[20px] bg-white p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-4">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#F3EDE3] flex items-center justify-center text-secondary font-semibold">
                        {/* Логотип заказа */}
                        {hasLogo ? (
                            <Image
                                src={logoUrl!}
                                alt={title}
                                width={48}
                                height={48}
                                className="h-14 w-14 rounded-full object-cover"
                            />
                        ) : (
                            <span aria-hidden="true">{initials}</span>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        {/* Название заказа */}
                        <h3 className="text-[22px] font-bold leading-[115%] text-secondary">
                            {title}
                        </h3>
                        {/* Регион заказа */}
                        <span className="text-[14px] font-normal leading-[130%] text-secondary">
                            {region}
                        </span>
                    </div>
                </div>
                <div className="flex flex-col gap-6.75 items-end">
                    {/* Цена */}
                    <span className="text-[28px] font-semibold text-secondary leading-[110%] text-right">
                        {price}
                    </span>
                    {/* Дата создания */}
                    <span className="text-[14px] font-normal text-accent-septenary">
                        Создано {createdAt}.
                    </span>
                </div>
            </div>
        </article>
    )
}
