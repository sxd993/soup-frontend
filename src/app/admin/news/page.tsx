"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { getNews } from "@/entities/News/model/api/getNews";
import type { NewsItem } from "@/entities/News/model/types/news.types";

import { useDeleteNews } from "@/features/AdminNews/deleteNews/useDeleteNews";
import { usePinNews } from "@/features/AdminNews/pinNews/usePinNews";

export default function AdminNewsPage() {
  const router = useRouter();

  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  const {
    remove,
    loadingId: deleteLoadingId,
    error: deleteError,
  } = useDeleteNews();

  const {
    pin,
    unpin,
    loadingId: pinLoadingId,
    error: pinError,
  } = usePinNews();

  useEffect(() => {
    getNews()
      .then((data) => setNews(data))
      .finally(() => setLoading(false));
  }, []);

  async function handleDelete(id: string) {
    const ok = confirm("Удалить новость?");
    if (!ok) return;

    try {
      await remove(id);
      setNews((prev) => prev.filter((n) => n.id !== id));
    } catch {}
  }

  async function handleTogglePin(item: NewsItem) {
    try {
      if (item.isImportantNew) {
        await unpin(item.id);
        setNews((prev) =>
          prev.map((n) =>
            n.id === item.id ? { ...n, isImportantNew: false } : n,
          ),
        );
      } else {
        await pin(item.id);
        setNews((prev) =>
          prev.map((n) =>
            n.id === item.id ? { ...n, isImportantNew: true } : n,
          ),
        );
      }
    } catch {}
  }

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Новости (админ)</h1>

        <button
          type="button"
          onClick={() => router.push("/admin/news/create")}
          className="rounded-md border px-3 py-1.5 text-sm hover:bg-muted"
        >
          + Создать
        </button>
      </div>

      {deleteError && <div className="text-sm text-red-500">{deleteError}</div>}
      {pinError && <div className="text-sm text-red-500">{pinError}</div>}

      <div className="overflow-hidden rounded-md border">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr className="text-left">
              <th className="px-4 py-2">Заголовок</th>
              <th className="px-4 py-2">Категория</th>
              <th className="px-4 py-2">Автор</th>
              <th className="px-4 py-2">Дата</th>
              <th className="px-4 py-2 w-[220px]">Действия</th>
            </tr>
          </thead>

          <tbody>
            {news.map((item) => (
              <tr
                key={item.id}
                className={`border-t ${
                  item.isImportantNew ? "bg-yellow-50" : ""
                }`}
              >
                <td className="px-4 py-2 font-medium">{item.title}</td>
                <td className="px-4 py-2">{item.category}</td>
                <td className="px-4 py-2">{item.author}</td>
                <td className="px-4 py-2">
                  {item.createdAt
                    ? new Date(item.createdAt).toLocaleDateString()
                    : "—"}
                </td>

                <td className="px-4 py-2">
                  <div className="flex gap-2">
                    <Link
                      href={`/admin/news/${item.id}`}
                      className="text-xs underline"
                    >
                      Редактировать
                    </Link>

                    <button
                      type="button"
                      onClick={() => handleTogglePin(item)}
                      disabled={pinLoadingId === item.id}
                      className={`text-xs ${
                        item.isImportantNew
                          ? "text-yellow-600"
                          : "text-blue-600"
                      } ${
                        pinLoadingId === item.id
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:underline"
                      }`}
                    >
                      {item.isImportantNew ? "Открепить" : "Закрепить"}
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDelete(item.id)}
                      disabled={deleteLoadingId === item.id}
                      className={`text-xs text-red-500 ${
                        deleteLoadingId === item.id
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:underline"
                      }`}
                    >
                      Удалить
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
