import { CreateOrderForm } from "@/features/Order/CreateOrderForm";

export default function NewOrderPage() {
  return (
    <section className="flex flex-col gap-6 min-h-screen">
      <div className="mx-auto w-full max-w-[700px]">
        <CreateOrderForm />
      </div>
    </section>
  );
}
