import { getNewsById } from "@/entities/News/model/api/getNewsById";
import type { NewsItem } from "@/entities/News/model/types/news.types";
import Link from "next/link";
import { AdminNewsForm } from "@/widgets/AdminNewsForm/AdminNewsForm";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function AdminNewsEditPage({ params }: PageProps) {
  const { id } = await params;
  const news: NewsItem = await getNewsById(id);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Редактирование новости</h1>

        <Link href="/admin/news" className="text-sm underline">
          ← Назад
        </Link>
      </div>

      <AdminNewsForm initialData={news} />
    </div>
  );
}
