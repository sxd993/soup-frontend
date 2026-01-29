"use client";

import { useState } from "react";
import { pinNews } from "@/entities/News/model/api/pinNews";
import { unpinNews } from "@/entities/News/model/api/unpinNews";

export function usePinNews() {
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function pin(id: string) {
    try {
      setLoadingId(id);
      setError(null);
      await pinNews(id);
    } catch (e) {
      setError((e as Error).message);
      throw e;
    } finally {
      setLoadingId(null);
    }
  }

  async function unpin(id: string) {
    try {
      setLoadingId(id);
      setError(null);
      await unpinNews(id);
    } catch (e) {
      setError((e as Error).message);
      throw e;
    } finally {
      setLoadingId(null);
    }
  }

  return { pin, unpin, loadingId, error };
}
