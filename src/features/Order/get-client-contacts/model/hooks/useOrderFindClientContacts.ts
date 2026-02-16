"use client";

import { useMemo } from "react";
import { useGetClientContacts } from "@/features/Order/get-client-contacts";
import type { ClientContactType } from "@/features/Order/get-client-contacts";

const CONTACT_PRIORITY: ClientContactType[] = ["phone", "email", "telegram", "max"];

export const useOrderFindClientContacts = (
  orderId: number,
  fallbackCity: string,
) => {
  const query = useGetClientContacts(orderId, orderId > 0);
  const data = query.data;

  const contacts = useMemo(() => {
    const source = Array.isArray(data?.contacts) ? data.contacts : [];
    return CONTACT_PRIORITY.map((type) => {
      const item = source.find(
        (contact) =>
          contact.type === type &&
          typeof contact.value === "string" &&
          contact.value.trim() !== "",
      );
      if (!item) return null;
      const value = item.value.trim();
      const href =
        type === "phone"
          ? `tel:${value.replace(/\s+/g, "")}`
          : type === "email"
            ? `mailto:${value}`
            : type === "telegram"
              ? `https://t.me/${value.replace(/^@/, "")}`
              : null;

      return {
        type,
        value,
        href,
      };
    }).filter(
      (
        item,
      ): item is { type: ClientContactType; value: string; href: string | null } =>
        item != null,
    );
  }, [data?.contacts]);

  const fullName = data?.full_name?.trim() || null;
  const city = data?.city?.trim() || fallbackCity.trim() || null;
  const avatarUrl = data?.avatar_url?.trim() || null;

  const isEmpty = !fullName && !city && !avatarUrl && contacts.length === 0;

  return {
    fullName,
    city,
    avatarUrl,
    contacts,
    isLoading: query.isLoading,
    isError: query.isError,
    isEmpty,
  };
};
