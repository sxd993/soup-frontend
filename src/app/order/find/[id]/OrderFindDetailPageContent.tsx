"use client";

import { useSession } from "@/entities/Session";
import { Button } from "@/shared/ui";
import Link from "next/link";

const ACCESS_DENIED_MESSAGE =
  "Доступ к данной странице есть только у зарегистрированных компаний";

type OrderFindDetailPageContentProps = {
  orderId: string;
};

export function OrderFindDetailPageContent({ orderId }: OrderFindDetailPageContentProps) {
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
    <div className="mt-15 flex min-h-[50vh] flex-col items-center justify-center gap-6 pb-20">
      <p className="text-center text-lg font-semibold text-secondary">
        Здесь будет страница заказа
      </p>
      <Link href="/order/find">
        <Button className="rounded-full">← К списку заказов</Button>
      </Link>
    </div>
  );
}
