import type { Order } from "../model/type/order.types"
import { formatOrderDate, formatOrderPrice } from "../model/lib/order.helper"

type OrdersCardProps = {
    order: Order
}

export const OrdersCard = ({ order }: OrdersCardProps) => {
    const formatDate = formatOrderDate(order.createdAt)

    return (
        <article className="rounded-[20px] bg-white p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                    {order.orderLogoUrl && (
                        <img
                            src={order.orderLogoUrl}
                            alt={order.title}
                            className="h-10 w-10 rounded-full object-cover"
                        />
                    )}
                    <div className="flex flex-col gap-1">
                        <h3 className="text-[20px] font-bold leading-[120%] text-secondary">
                            {order.title}
                        </h3>
                        <span className="text-[14px] font-normal leading-[130%] text-accent-septenary">
                            {order.region}
                        </span>
                    </div>
                </div>
                <div className="flex flex-col gap-2 md:items-end">
                    <span className="text-[22px] font-bold text-secondary">
                        {formatOrderPrice(order.price)}
                    </span>
                    <span className="text-[14px] font-normal text-accent-septenary">
                        Создано {formatDate}.
                    </span>
                </div>
            </div>
        </article>
    )
}
