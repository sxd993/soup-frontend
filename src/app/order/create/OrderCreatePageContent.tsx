"use client";

import { useSession } from "@/entities/Session";
import { StateProvider } from "@/app/providers/State/StateProvider";
import { Button } from "@/shared/ui";
import Link from "next/link";
import { CreateOrderPageSkeleton } from "@/features/Order/CreateOrderForm/ui/CreateOrderPageSkeleton";
import { CreateOrderForm } from "@/features/Order/CreateOrderForm";

const ACCESS_DENIED_MESSAGE =
  "Размещать заказы могут только клиенты. У компаний есть раздел «Найти заказ».";

export function OrderCreatePageContent() {
  const { data: session, isLoading } = useSession();

  const isEmpty = session?.user?.role === "company";

  const emptyComponent = (
    <div className="mt-[34px] flex min-h-[40vh] flex-col items-center justify-center gap-4 pb-20">
      <p className="text-center text-lg font-semibold text-secondary">
        {ACCESS_DENIED_MESSAGE}
      </p>
      <Link href="/order/find">
        <Button className="rounded-full">Найти заказ</Button>
      </Link>
    </div>
  );

  return (
    <StateProvider
      isLoading={isLoading}
      isError={false}
      isEmpty={isEmpty}
      loadingComponent={<CreateOrderPageSkeleton />}
      emptyComponent={emptyComponent}
    >
      <main className="mt-[34px] pb-20">
        <div className="mx-auto flex w-full max-w-[700px] flex-col gap-6">
          <CreateOrderForm />
        </div>
      </main>
    </StateProvider>
  );
}
