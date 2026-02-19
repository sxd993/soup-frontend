"use client";

import { useSession } from "@/entities/Session";
import { StateProvider } from "@/app/providers/State/StateProvider";
import { SectionTitle, Button, Search } from "@/shared/ui";
import Link from "next/link";
import { OrderFindPageSkeleton } from "@/widgets/OrderFind/OrderFindPage/skeletons/OrderFindPageSkeleton";
import { OrderFindFilters } from "@/widgets/OrderFind/Filters/ui/OrderFindFilters";
import { OrderFindList } from "@/widgets/OrderFind/OrderFindList/ui/OrderFindList";

const ACCESS_DENIED_MESSAGE =
  "Доступ к данной странице есть только у зарегистрированных компаний";

const wrapperClassName =
  "mt-15 flex min-h-[40vh] flex-col items-center justify-center gap-4 pb-20";

export function OrderFindPageContent() {
  const { data: session, isLoading, isError } = useSession();

  const isEmpty = !session?.user || session.user.role !== "company";

  const emptyComponent = !session?.user ? (
    <div className={wrapperClassName}>
      <p className="text-center text-lg font-semibold text-secondary">
        {ACCESS_DENIED_MESSAGE}
      </p>
      <Link href="/auth/login">
        <Button className="rounded-full">Войти</Button>
      </Link>
    </div>
  ) : (
    <div className={wrapperClassName}>
      <p className="text-center text-lg font-semibold text-secondary">
        {ACCESS_DENIED_MESSAGE}
      </p>
      <Link href="/profile/client/account">
        <Button className="rounded-full">В личный кабинет</Button>
      </Link>
    </div>
  );

  return (
    <StateProvider
      isLoading={isLoading}
      isError={isError}
      isEmpty={isEmpty}
      loadingComponent={<OrderFindPageSkeleton />}
      emptyComponent={emptyComponent}
    >
      <div className="mt-15 pb-20">
        <SectionTitle
          title="Найти заказ"
          className="mb-8 text-[40px] font-bold leading-[110%] text-secondary"
        />
        <div className="mt-8 flex items-center gap-4">
          <div className="flex-1 hidden md:block">
            <div className="relative">
              <Search className="absolute w-4 h-4 left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="поиск по названию"
                className="w-full pl-10 pr-4 py-2.5 rounded-[20px] bg-white focus:outline-none font-semibold text-sm placeholder:text-accent-septenary placeholder:font-normal"
              />
            </div>
          </div>
          <Button className="hidden md:block cursor-pointer">Найти</Button>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr] lg:gap-x-12">
          <OrderFindFilters />
          <OrderFindList />
        </div>
      </div>
    </StateProvider>
  );
}
