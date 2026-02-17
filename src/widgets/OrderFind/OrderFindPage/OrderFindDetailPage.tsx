import {
  OrderCard,
  OrderDetails,
  OrderFindDetailCard,
  OrderFindClientContactsCard,
  type Order,
} from "@/entities/Orders";

type OrderFindDetailPageProps = {
  order: Order;
  relatedOrders: Order[];
  isResponded?: boolean;
  onRespond?: () => void;
  isRespondPending?: boolean;
};

export function OrderFindDetailPage({
  order,
  relatedOrders,
  isResponded,
  onRespond,
  isRespondPending,
}: OrderFindDetailPageProps) {
  return (
    <div className="mt-15 pb-20">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
        <section className="flex flex-col gap-8">
          <OrderFindDetailCard
            order={order}
            isResponded={isResponded}
            onRespond={onRespond}
            isRespondPending={isRespondPending}
          />
          <OrderDetails order={order} />
          <OrderFindClientContactsCard orderId={order.id} />
        </section>

        <aside className="flex flex-col gap-5">
          <h2 className="text-[22px] font-bold leading-[110%] text-secondary">
            Похожие заказы
          </h2>
          {relatedOrders.length > 0 ? (
            <div className="flex flex-col gap-4">
              {relatedOrders.map((item) => (
                <OrderCard key={item.id} order={item} />
              ))}
            </div>
          ) : (
            <div className="rounded-[20px] bg-white p-5 text-[14px] text-accent-septenary">
              Похожие заказы пока не найдены
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
