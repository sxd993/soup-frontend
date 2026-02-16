"use client";

import { useState } from "react";
import { updateNews } from "@/entities/News/model/api/updateNews";
import type { UpdateNewsPayload } from "@/entities/News/model/api/updateNews";

export function useUpdateNews(id: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function submit(data: UpdateNewsPayload) {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      await updateNews(id, data);

      setSuccess(true);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return { submit, loading, error, success };
}
