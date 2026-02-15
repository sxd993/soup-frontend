"use client"

import { Controller } from "react-hook-form"
import { OrderLocationIcon, OrderChevronDownIcon } from "@/shared/ui"
import { useOrderRegionDropdown } from "../model/hooks/useOrderRegionDropdown"

export const OrderRegionDropdown = () => {
  const { control, regions, isLoading, isOpen, ref, toggle, close } =
    useOrderRegionDropdown()

  return (
    <Controller
      name="location"
      control={control}
      render={({ field }) => (
        <div ref={ref} className="relative w-full">
          <button
            type="button"
            onClick={toggle}
            className="flex w-full items-center gap-2 rounded-[20px] text-base bg-background p-2 text-accent-septenary font-medium outline-none transition focus:border-primary"
          >
            <OrderLocationIcon className="shrink-0 text-accent-septenary" />
            <span
              className={
                field.value ? "text-accent-secondary" : "text-accent-quinary"
              }
            >
              {field.value || "Где нужно оказать услугу"}
            </span>
            <OrderChevronDownIcon className="ml-auto shrink-0 text-accent-septenary" />
          </button>
          {isOpen && (
            <div className="absolute top-full left-0 right-0 z-10 mt-1 max-h-52 overflow-auto rounded-[18px] border border-[#E5E5E5] bg-white py-1">
              {isLoading ? (
                <div className="px-4 py-2 text-sm text-accent-quinary">
                  Загрузка…
                </div>
              ) : (
                regions.map((region) => (
                  <button
                    key={region.id}
                    type="button"
                    onClick={() => {
                      field.onChange(region.label)
                      close()
                    }}
                    className={`flex w-full px-4 py-2 text-left text-sm font-medium text-[#171717] transition-colors hover:bg-[#F5F5F5] ${
                      field.value === region.label ? "bg-[#F6F6F6]" : ""
                    }`}
                  >
                    {region.label}
                  </button>
                ))
              )}
            </div>
          )}
        </div>
      )}
    />
  )
}
