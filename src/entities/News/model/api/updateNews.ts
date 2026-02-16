import { API_BASE_URL } from "@/shared/api/config";
import type { NewsItem } from "../types/news.types";

export type UpdateNewsPayload = Omit<NewsItem, "id">;

export async function updateNews(id: string, data: UpdateNewsPayload) {
  const res = await fetch(`${API_BASE_URL}/admin/news/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    if (res.status === 401) {
      throw new Error("Не авторизован");
    }
    if (res.status === 403) {
      throw new Error("Нет прав администратора");
    }
    throw new Error("Не удалось сохранить новость");
  }

  return res.json();
}
