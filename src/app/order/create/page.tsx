import type { Metadata } from "next";
import { CreateOrderForm } from "@/features/Order/CreateOrderForm";

export const metadata: Metadata = {
  title: "Разместить заказ",
  description: "Студия уникальных проектов",
};

export default function OrderCreatePage() {
  return (
    <main className="mt-[34px] pb-20">
      <div className="mx-auto flex w-full max-w-[700px] flex-col gap-6">
        <CreateOrderForm />
      </div>
    </main>
  );
}
