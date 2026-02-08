"use client"

import Link from "next/link"
import { Button } from "@/shared/ui"

export const NotFound = () => {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
      <div className="space-y-3">
        <p className="text-sm font-semibold text-accent-quinary">Ошибка 404</p>
        <h1 className="text-[28px] font-bold leading-[120%] text-secondary md:text-[36px] lg:text-[44px]">
          Страница не найдена
        </h1>
        <p className="mx-auto max-w-[520px] text-sm text-accent-quinary md:text-base lg:text-lg">
          Возможно, страница была удалена или вы перешли по неверной ссылке.
        </p>
      </div>
      <Button className="h-12 rounded-full !bg-[#535353] !text-white hover:!bg-[#2F2F2F] active:!bg-[#201F1F] disabled:!bg-[#C5C2C2] md:h-13 lg:h-14">
        <Link href="/">На главную</Link>
      </Button>
    </section>
  )
}
