"use client";

import { StateProvider } from "@/app/providers/State/StateProvider";
import { EmailIcon, PhoneIcon, TgIcon } from "@/shared/ui";
import { useOrderFindClientContacts } from "../../../features/Order/get-client-contacts/model/hooks/useOrderFindClientContacts";
import { OrderFindClientContactsSkeleton } from "../../../features/Order/get-client-contacts/ui/states/OrderFindClientContactsSkeleton";

type OrderFindClientContactsCardProps = {
  orderId: number;
  fallbackCity: string;
};

export function OrderFindClientContactsCard({
  orderId,
  fallbackCity,
}: OrderFindClientContactsCardProps) {
  const card = useOrderFindClientContacts(orderId, fallbackCity);

  return (
    <StateProvider
      isLoading={card.isLoading}
      isError={card.isError}
      isEmpty={card.isEmpty}
      errorTitle="Не удалось загрузить контакты заказчика"
      loadingComponent={<OrderFindClientContactsSkeleton />}
      emptyComponent={null}
    >
      <section className="rounded-[20px] bg-white p-5">
        <h2 className="text-[48px] font-semibold leading-[110%] text-secondary">
          Контакты заказчика
        </h2>

        <div className="mt-8 flex items-start gap-4">
          {card.avatarUrl ? (
            <img
              src={card.avatarUrl}
              alt={card.fullName ?? "Аватар заказчика"}
              className="h-[104px] w-[104px] rounded-[20px] object-cover"
            />
          ) : (
            <div className="h-[104px] w-[104px] rounded-[20px] bg-[#C5C5C7]" />
          )}

          <div className="min-w-0">
            {card.fullName ? (
              <p className="text-[52px] font-semibold leading-[100%] text-secondary">
                {card.fullName}
              </p>
            ) : null}
            {card.city ? (
              <p className="mt-2 text-[50px] font-normal leading-[100%] text-secondary">
                {card.city}
              </p>
            ) : null}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          {card.contacts.map((item) => (
            <div
              key={`${item.type}-${item.value}`}
              className="flex items-center gap-3 text-secondary"
            >
              <span className="flex h-8 w-8 items-center justify-center text-[#B4B4B6] [&_path]:fill-[#B4B4B6]">
                {item.type === "phone" ? (
                  <PhoneIcon />
                ) : item.type === "email" ? (
                  <EmailIcon />
                ) : item.type === "telegram" ? (
                  <TgIcon />
                ) : (
                  <span className="text-[16px] font-semibold leading-none text-[#B4B4B6]">
                    M
                  </span>
                )}
              </span>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.type === "telegram" ? "_blank" : undefined}
                  rel={item.type === "telegram" ? "noreferrer" : undefined}
                  className="text-[22px] font-normal leading-[130%] hover:opacity-80"
                >
                  {item.value}
                </a>
              ) : (
                <span className="text-[22px] font-normal leading-[130%]">
                  {item.value}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>
    </StateProvider>
  );
}
