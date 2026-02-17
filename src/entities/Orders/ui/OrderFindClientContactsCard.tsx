"use client";

import { StateProvider } from "@/app/providers/State/StateProvider";
import { EmailIcon, PhoneIcon, TgIcon, MaxIcon } from "@/shared/ui";
import { useOrderFindClientContacts } from "../../../features/Order/get-client-contacts/model/hooks/useOrderFindClientContacts";

type OrderFindClientContactsCardProps = {
  orderId: number;
};

export function OrderFindClientContactsCard({
  orderId,
}: OrderFindClientContactsCardProps) {
  const card = useOrderFindClientContacts(orderId);

  return (
    <StateProvider
      isLoading={card.isLoading}
      isError={card.isError}
      isEmpty={card.isEmpty}
      errorTitle="Не удалось загрузить контакты заказчика"
      emptyComponent={null}
    >
      <section className="rounded-[20px] bg-white p-5 flex flex-col gap-5">

        <h2 className="text-[22px] font-semibold leading-[115%] text-secondary">
          Контакты заказчика
        </h2>

        {/* Аватарка + ФИО + Город*/}
        <div className="flex items-start gap-5">

          {/* Аватарка */}
          {card.avatarUrl ? (
            <img
              src={card.avatarUrl}
              alt={card.fullName ?? "Аватар заказчика"}
              className="h-[48px] w-[48px] rounded-[10px] object-cover"
            />
          ) : (
            <div className="h-[48px] w-[48px] rounded-[10px] bg-[#C5C5C7]" />
          )}

          {/* ФИО */}
          <div className="flex flex-col gap-1">

            {card.fullName ? (
              <p className="text-[22px] font-bold leading-[115%] text-secondary">
                {card.fullName}
              </p>
            ) : null}

            {/* Город */}
            {card.city ? (
              <p className="text-[14px] font-normal leading-[130%] text-secondary">
                {card.city}
              </p>
            ) : null}
          </div>
        </div>

        {/* Телефон + почта + соц сети*/}
        {card.contacts.length > 0 ? (
          <div className="flex flex-col gap-2">
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
                    <MaxIcon/>
                  )}
                </span>
                <span className="text-[16px] font-normal leading-[110%]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        ) : null}
      </section>
    </StateProvider>
  );
}
