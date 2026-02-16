import Link from "next/link";
import { Button } from "@/shared/ui";

const ACCESS_DENIED_MESSAGE =
  "Доступ к данной странице есть только у зарегистрированных компаний";

type OrderFindDetailAccessDeniedProps = {
  href: string;
  buttonLabel: string;
};

export function OrderFindDetailAccessDenied({
  href,
  buttonLabel,
}: OrderFindDetailAccessDeniedProps) {
  return (
    <div className="mt-15 flex min-h-[40vh] flex-col items-center justify-center gap-4 pb-20">
      <p className="text-center text-lg font-semibold text-secondary">
        {ACCESS_DENIED_MESSAGE}
      </p>
      <Link href={href}>
        <Button className="rounded-full">{buttonLabel}</Button>
      </Link>
    </div>
  );
}

