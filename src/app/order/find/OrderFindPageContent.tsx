"use client";

import { useSession } from "@/entities/Session";
import { SectionTitle, AdsBanner, Button } from "@/shared/ui";
import Link from "next/link";
import { OrderFindFilters } from "@/widgets/OrderFind/Filters/ui/OrderFindFilters";
import { OrderFindList } from "@/widgets/OrderFind/OrderFindList/ui/OrderFindList";

const ACCESS_DENIED_MESSAGE =
  "Доступ к данной странице есть только у зарегистрированных компаний";

export function OrderFindPageContent() {
  const { data: session, isLoading } = useSession();

  if (isLoading) {
    return (
      <div className="mt-15 flex min-h-[40vh] items-center justify-center pb-20">
        <p className="text-accent-quinary">Загрузка...</p>
      </div>
    );
  }

  if (!session?.user) {
    return (
      <div className="mt-15 flex min-h-[40vh] flex-col items-center justify-center gap-4 pb-20">
        <p className="text-center text-lg font-semibold text-secondary">
          {ACCESS_DENIED_MESSAGE}
        </p>
        <Link href="/auth/login">
          <Button className="rounded-full">Войти</Button>
        </Link>
      </div>
    );
  }

  if (session.user.role !== "company") {
    return (
      <div className="mt-15 flex min-h-[40vh] flex-col items-center justify-center gap-4 pb-20">
        <p className="text-center text-lg font-semibold text-secondary">
          {ACCESS_DENIED_MESSAGE}
        </p>
        <Link href="/profile/client/account">
          <Button className="rounded-full">В личный кабинет</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-15 pb-20">
      <SectionTitle
        title="Найти заказ"
        className="mb-8 text-[40px] font-bold leading-[110%] text-secondary"
      />
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr_280px]">
        <OrderFindFilters />
        <OrderFindList />
        <aside className="flex flex-col gap-6">
          <div className="h-[370px] w-[280px] shrink-0">
            <AdsBanner hasDescription />
          </div>
        </aside>
      </div>
    </div>
  );
}
