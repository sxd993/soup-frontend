import Link from "next/link";
import { Button } from "@/shared/ui";

type OrderFindDetailNotFoundProps = {
  message: string;
};

export function OrderFindDetailNotFound({ message }: OrderFindDetailNotFoundProps) {
  return (
    <div className="mt-15 flex min-h-[40vh] flex-col items-center justify-center gap-4 pb-20">
      <p className="text-center text-lg font-semibold text-secondary">{message}</p>
      <Link href="/order/find">
        <Button className="rounded-full">← К списку заказов</Button>
      </Link>
    </div>
  );
}

