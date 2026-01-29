"use client";

import { useState } from "react";
import { createNews } from "@/entities/News/model/api/createNews";
import type { CreateNewsPayload } from "@/entities/News/model/api/createNews";

export function useCreateNews() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(data: CreateNewsPayload) {
    try {
      setLoading(true);
      setError(null);

      const result = await createNews(data);
      return result;
    } catch (e) {
      setError((e as Error).message);
      throw e;
    } finally {
      setLoading(false);
    }
  }

  return { submit, loading, error };
}
