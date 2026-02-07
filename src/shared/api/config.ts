const normalizeApiBaseUrl = (value?: string): string => {
  if (!value) return "";
  return value.trim().replace(/\/+$/, "");
};

const rawApiBaseUrl = process.env.API_BASE_URL ?? process.env.NEXT_PUBLIC_API_URL;

// Unified API base URL for server and client; trims trailing slash to avoid `//path`.
export const API_BASE_URL = normalizeApiBaseUrl(rawApiBaseUrl);
