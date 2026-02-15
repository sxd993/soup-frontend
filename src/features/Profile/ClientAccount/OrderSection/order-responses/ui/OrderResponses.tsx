"use client";

type OrderResponsesProps = {
  orderId: number;
};

export const OrderResponses = ({ orderId }: OrderResponsesProps) => {
  return (
    <div className="rounded-[20px] bg-white p-5">
      <p className="text-[14px] text-accent-septenary">Откликов пока нет</p>
    </div>
  );
};
