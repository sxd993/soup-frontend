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
    <div className="flex flex-col gap-6 rounded-[20px] bg-white p-5">
      <section>
        <h2 className="mb-2 font-bold text-[22px] leading-[115%] text-secondary">
          Описание
        </h2>
        <p className="text-[16px] font-medium leading-[140%] text-secondary">
          {order.description}
        </p>
      </section>
      <section>
        <h2 className="mb-2 font-bold text-[22px] leading-[115%] text-secondary">
          Категория услуг
        </h2>
        <p className="text-[16px] font-medium leading-[140%] text-secondary">
          {order.category}
        </p>
      </section>
      <section>
        <h2 className="mb-2 font-bold text-[22px] leading-[115%] text-secondary">
          Сроки
        </h2>
        <p className="text-[16px] font-medium leading-[140%] text-secondary">
          {deadlineLabel}
        </p>
      </section>
      <section>
        <h2 className="mb-2 font-bold text-[22px] leading-[115%] text-secondary">
          Фото/файлы
        </h2>
        <OrderDetailsFiles fileUrls={order.fileUrls ?? []} />
      </section>
    </div>
  );
};
