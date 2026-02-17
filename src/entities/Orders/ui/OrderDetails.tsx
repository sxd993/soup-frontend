"use client";

import type { Order } from "../model/types/order.types";
import { formatOrderDeadline } from "@/shared/lib/order";
import { OrderDetailsFiles } from "./OrderDetailsFiles";

type OrderDetailsProps = {
  order: Order;
};

export const OrderDetails = ({ order }: OrderDetailsProps) => {
  const deadlineLabel = formatOrderDeadline(order.deadline);

  return (
    <div className="flex flex-col gap-4 rounded-[20px] bg-white p-4 md:gap-6 md:p-5">
      <section>
        <h2 className="mb-2 font-bold text-[18px] leading-[115%] text-secondary md:text-[22px]">
          Описание
        </h2>
        <p className="text-[14px] font-medium leading-[140%] text-secondary md:text-[16px]">
          {order.description}
        </p>
      </section>
      <section>
        <h2 className="mb-2 font-bold text-[18px] leading-[115%] text-secondary md:text-[22px]">
          Категория услуг
        </h2>
        <p className="text-[14px] font-medium leading-[140%] text-secondary md:text-[16px]">
          {order.category}
        </p>
      </section>
      <section>
        <h2 className="mb-2 font-bold text-[18px] leading-[115%] text-secondary md:text-[22px]">
          Сроки
        </h2>
        <p className="text-[14px] font-medium leading-[140%] text-secondary md:text-[16px]">
          {deadlineLabel}
        </p>
      </section>
      <section>
        <h2 className="mb-2 font-bold text-[18px] leading-[115%] text-secondary md:text-[22px]">
          Фото/файлы
        </h2>
        <OrderDetailsFiles fileUrls={order.fileUrls ?? []} />
      </section>
    </div>
  );
};
