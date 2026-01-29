import { API_BASE_URL } from "@/shared/api/config";

export async function deleteNews(id: string) {
  const res = await fetch(`${API_BASE_URL}/admin/news/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  if (!res.ok) {
    if (res.status === 401) {
      throw new Error("Не авторизован");
    }
    if (res.status === 403) {
      throw new Error("Нет прав администратора");
    }
    throw new Error("Не удалось удалить новость");
  }

  return true;
}
