"use client";

import { Controller } from "react-hook-form";
import { OrderChevronDownIcon } from "@/shared/ui";
import { useOrderCategoryDropdown } from "../model/hooks/useOrderCategoryDropdown";

export const OrderCategoryDropdown = () => {
  const { control, badges, isOpen, ref, toggle, close } =
    useOrderCategoryDropdown();

  return (
    <Controller
      name="categoryId"
      control={control}
      render={({ field }) => (
        <div ref={ref} className="relative w-full">
          <button
            type="button"
            onClick={toggle}
            className="flex w-full items-center gap-2 rounded-[20px] text-base bg-background p-2 text-accent-septenary font-medium outline-none transition focus:border-primary"
          >
            <span
              className={
                field.value ? "text-accent-secondary" : "text-accent-quinary"
              }
            >
              {field.value || "Категория услуг"}
            </span>
            <OrderChevronDownIcon className="ml-auto shrink-0 text-accent-septenary" />
          </button>
          {isOpen && (
            <div className="absolute top-full left-0 right-0 z-10 mt-1 max-h-52 overflow-auto rounded-[18px] border border-[#E5E5E5] bg-white py-1">
              {badges.map((badge) => (
                <button
                  key={badge}
                  type="button"
                  onClick={() => {
                    field.onChange(badge);
                    close();
                  }}
                  className={`flex w-full px-4 py-2 text-left text-sm font-medium text-[#171717] transition-colors hover:bg-[#F5F5F5] ${
                    field.value === badge ? "bg-[#F6F6F6]" : ""
                  }`}
                >
                  {badge}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    />
  );
};
