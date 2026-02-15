"use client";

import { useMemo } from "react";
import { isImageUrl } from "../lib/isImageUrl";

export type OrderDetailsFileItem = {
  type: "image" | "file";
  url: string;
  key: string;
};

export const useOrderDetailsFiles = (fileUrls: string[]) => {
  const items = useMemo<OrderDetailsFileItem[]>(
    () =>
      fileUrls.map((url, i) => ({
        type: (isImageUrl(url) ? "image" : "file") as "image" | "file",
        url,
        key: `${url}-${i}`,
      })),
    [fileUrls],
  );
  const isEmpty = items.length === 0;
  return { items, isEmpty };
};
