"use client";

import { Button } from "@/shared/ui";
import { useRespondToOrderModalForm } from "../model/hooks/useRespondToOrderModalForm";

type RespondToOrderModalProps = {
  orderId: number;
};

export function RespondToOrderModal({ orderId }: RespondToOrderModalProps) {
  const form = useRespondToOrderModalForm(orderId);

  if (!form.isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
      onClick={form.handleClose}
    >
      <div
        className="w-full max-w-[760px] rounded-[32px] bg-white px-8 py-10"
        onClick={(event) => event.stopPropagation()}
      >
        {form.isSuccess ? (
          <div className="mx-auto max-w-[600px] py-6 text-center">
            <h3 className="text-[40px] font-semibold leading-[110%] text-secondary">
              Ваш отклик и контакты отправлены
            </h3>
            <p className="mx-auto mt-4 max-w-[520px] text-[24px] leading-[120%] text-secondary">
              Заказчик свяжется с вами, если ваше предложение ему понравится
            </p>
            <div className="mt-8">
              <Button className="min-w-[260px]" onClick={form.handleResetAndClose}>
                Закрыть
              </Button>
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-[680px]">
            <h3 className="text-center text-[42px] font-semibold leading-[110%] text-secondary">
              Отклик на заказ
            </h3>

            <div className="mt-8">
              <p className="text-[34px] font-semibold leading-[110%] text-secondary">
                Стоимость услуг
              </p>
              <p className="mt-2 text-[20px] font-normal leading-[130%] text-secondary">
                Укажите примерную стоимость. О точной сумме вы можете договориться потом
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <input
                  value={form.priceFrom}
                  onChange={(event) => form.setPriceFrom(event.target.value)}
                  placeholder="От"
                  inputMode="numeric"
                  className="h-[56px] rounded-[999px] border border-[#BDBDBD] px-5 text-[24px] text-secondary outline-none"
                />
                <input
                  value={form.priceTo}
                  onChange={(event) => form.setPriceTo(event.target.value)}
                  placeholder="До"
                  inputMode="numeric"
                  className="h-[56px] rounded-[999px] border border-[#BDBDBD] px-5 text-[24px] text-secondary outline-none"
                />
              </div>
            </div>

            <div className="mt-8">
              <p className="text-[34px] font-semibold leading-[110%] text-secondary">
                Ваше предложение или вопрос
              </p>
              <textarea
                value={form.message}
                onChange={(event) => form.setMessage(event.target.value)}
                placeholder="Описание работ"
                className="mt-4 min-h-[200px] w-full resize-none rounded-[24px] border border-[#BDBDBD] px-5 py-4 text-[24px] text-secondary outline-none"
              />
            </div>

            <div className="mt-8 flex justify-center">
              <Button className="min-w-[320px]" onClick={form.handleSubmit} disabled={form.isRespondPending}>
                {form.isRespondPending ? "Отправка..." : "Отправить отклик"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
