"use client";

import { Controller, FormProvider } from "react-hook-form";
import {
  Button,
  Input,
  Switch,
  SectionTitle,
  OrderBudgetIcon,
  OrderLocationIcon,
  OrderCalendarIcon,
} from "@/shared/ui";
import { StateProvider } from "@/app/providers/State/StateProvider";
import { useCreateOrderForm } from "../model/hooks/useCreateOrderForm";
import { CreateOrderFormCategorySkeleton } from "./CreateOrderFormCategorySkeleton";
import { OrderCategoryDropdown } from "./OrderCategoryDropdown";
import { CreateOrderFormFilesInput } from "./CreateOrderFormFiles";
import { CreateOrderFormFilesList } from "./CreateOrderFormFiles";

export const CreateOrderForm = () => {
  const { formMethods, handleSubmit, badges, isLoading, isError, isPending } =
    useCreateOrderForm();
  const { register, control } = formMethods;

  return (
    <div className="flex flex-col gap-6">
      <SectionTitle
        className="font-semibold text-[28px]! leading-[110%]!"
        title="Новый заказ"
      />
      <div className="rounded-[20px] bg-white p-5">
        <FormProvider {...formMethods}>
          <form
            id="create-order-form"
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <label className="block">
              <span className="sr-only">Краткое название работ</span>
              <Input
                placeholder="Краткое название работ"
                className="w-full rounded-[20px] border-2 border-[#C5C2C2] bg-white text-accent-secondary font-medium placeholder:text-accent-quinary outline-none transition focus:border-primary"
                {...register("title")}
              />
            </label>

            <label className="block">
              <span className="sr-only">Описание работ</span>
              <textarea
                placeholder="Описание работ"
                rows={4}
                className="w-full resize-none rounded-[20px] border-2 border-[#C5C2C2] bg-white px-[22px] py-[19px] text-accent-secondary font-medium placeholder:text-accent-quinary outline-none transition focus:border-primary"
                {...register("description")}
              />
            </label>

            <div className="grid grid-cols-2 gap-6">
              <label className="flex w-full items-center gap-2 rounded-[20px] text-base bg-background p-2 text-accent-septenary font-medium outline-none transition">
                <OrderLocationIcon className="shrink-0 text-accent-septenary" />
                <input
                  type="text"
                  placeholder="Где нужно оказать услугу"
                  className="min-w-0 flex-1 border-0 bg-transparent text-accent-secondary placeholder:text-accent-quinary outline-none"
                  {...register("location")}
                />
              </label>
              <StateProvider
                isLoading={isLoading}
                isError={isError}
                errorTitle="Не удалось загрузить категории"
                loadingComponent={<CreateOrderFormCategorySkeleton />}
              >
                <OrderCategoryDropdown />
              </StateProvider>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <label className="flex w-full items-center gap-2 rounded-[20px] text-base bg-background p-2 text-accent-septenary font-medium outline-none transition">
                <OrderBudgetIcon className="shrink-0 text-accent-septenary" />
                <input
                  type="text"
                  placeholder="Бюджет"
                  className="min-w-0 flex-1 border-0 bg-transparent text-accent-secondary placeholder:text-accent-quinary outline-none"
                  {...register("budget")}
                />
              </label>
              <label className="flex w-full items-center gap-2 rounded-[20px] text-base bg-background p-2 text-accent-septenary font-medium outline-none transition">
                <OrderCalendarIcon className="shrink-0 text-accent-septenary" />
                <input
                  type="text"
                  placeholder="Срок"
                  className="min-w-0 flex-1 border-0 bg-transparent text-accent-secondary placeholder:text-accent-quinary outline-none"
                  {...register("deadline")}
                />
              </label>
              <CreateOrderFormFilesInput />
            </div>

            <div className="flex items-center justify-between gap-4 rounded-[20px] py-2">
              <span className="text-[14px] font-regular leading-[130%] text-secondary">
                Исполнители не видят ваш номер телефона и не могут вам звонить
              </span>
              <Controller
                name="hidePhone"
                control={control}
                render={({ field }) => (
                  <Switch checked={field.value} onChange={field.onChange} />
                )}
              />
            </div>

            <CreateOrderFormFilesList />
          </form>
        </FormProvider>
      </div>
      <div className="flex justify-end pt-2">
        <Button
          type="submit"
          form="create-order-form"
          className="cursor-pointer"
          disabled={isPending}
        >
          {isPending ? "Отправка…" : "Продолжить"}
        </Button>
      </div>
    </div>
  );
};
