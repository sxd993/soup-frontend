import Link from "next/link";
import { AdminNewsCreateForm } from "@/widgets/AdminNewsForm/AdminNewsCreateForm";

export default function AdminNewsCreatePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Создание новости</h1>

        <Link href="/admin/news" className="text-sm underline">
          ← Назад
        </Link>
      </div>

      <AdminNewsCreateForm />
    </div>
  );
}
