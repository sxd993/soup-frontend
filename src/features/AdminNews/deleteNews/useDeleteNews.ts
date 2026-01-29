"use client";

import { useState } from "react";
import { deleteNews } from "@/entities/News/model/api/deleteNews";

export function useDeleteNews() {
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function remove(id: string) {
    try {
      setLoadingId(id);
      setError(null);

      await deleteNews(id);
    } catch (e) {
      setError((e as Error).message);
      throw e;
    } finally {
      setLoadingId(null);
    }
  }

  return { remove, loadingId, error };
}
