"use client";

import { Button, CloseIcon } from "@/shared/ui";
import { useRespondToOrderModalForm } from "../model/hooks/useRespondToOrderModalForm";
import { RespondToOrderSuccessState } from "./RespondToOrderSuccessState";

type RespondToOrderModalProps = {
  orderId: number;
};

export function RespondToOrderModal({ orderId }: RespondToOrderModalProps) {
  const form = useRespondToOrderModalForm(orderId);

  if (!form.isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-3 sm:px-4"
      onClick={form.handleClose}
    >
      <div
        className="relative w-full max-w-[720px] rounded-[20px] bg-white px-3 py-4 sm:rounded-[24px] sm:px-6 sm:py-6"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={form.handleClose}
          aria-label="Закрыть модальное окно"
          className="absolute right-3 top-3 text-secondary transition-opacity hover:opacity-80 sm:right-4 sm:top-4"
        >
          <CloseIcon className="h-7 w-7 sm:h-9 sm:w-9" />
        </button>

        {form.isSuccess ? (
          <RespondToOrderSuccessState onClose={form.handleResetAndClose} />
        ) : (
          <div className="mx-auto max-w-[640px] pt-7 sm:pt-10">
            <h3 className="text-center text-[22px] font-semibold leading-[115%] text-secondary sm:text-[28px] sm:leading-[110%]">
              Отклик на заказ
            </h3>

            <div className="mt-5 sm:mt-7">
              <p className="text-[18px] font-semibold leading-[120%] text-secondary sm:text-[22px] sm:leading-[115%]">
                Стоимость услуг
              </p>
              <p className="mt-2 text-[14px] font-normal leading-[130%] text-secondary">
                Укажите примерную стоимость. О точной сумме вы можете договориться потом
              </p>
              <div className="mt-3 grid grid-cols-1 gap-2.5 sm:mt-4 sm:grid-cols-2 sm:gap-4">
                <input
                  value={form.priceFrom}
                  onChange={(event) => form.setPriceFrom(event.target.value)}
                  placeholder="От"
                  inputMode="numeric"
                  className="h-11 rounded-[999px] border border-[#BDBDBD] px-4 text-[16px] leading-[130%] text-secondary outline-none placeholder:text-[16px] placeholder:leading-[140%] sm:h-12"
                />
                <input
                  value={form.priceTo}
                  onChange={(event) => form.setPriceTo(event.target.value)}
                  placeholder="До"
                  inputMode="numeric"
                  className="h-11 rounded-[999px] border border-[#BDBDBD] px-4 text-[16px] leading-[130%] text-secondary outline-none placeholder:text-[16px] placeholder:leading-[140%] sm:h-12"
                />
              </div>
            </div>

            <div className="mt-5 sm:mt-7">
              <p className="text-[18px] font-semibold leading-[120%] text-secondary sm:text-[22px] sm:leading-[115%]">
                Ваше предложение или вопрос
              </p>
              <textarea
                value={form.message}
                onChange={(event) => form.setMessage(event.target.value)}
                placeholder="Описание работ"
                className="mt-3 min-h-[132px] w-full resize-none rounded-[16px] border border-[#BDBDBD] px-4 py-3 text-[16px] leading-[130%] text-secondary outline-none placeholder:text-[16px] placeholder:leading-[140%] sm:mt-4 sm:min-h-[168px] sm:rounded-[20px]"
              />
            </div>

            <div className="mt-5 flex justify-center sm:mt-7">
              <Button className="w-full sm:min-w-[260px] sm:w-auto" onClick={form.handleSubmit} disabled={form.isRespondPending}>
                {form.isRespondPending ? "Отправка..." : "Отправить отклик"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
