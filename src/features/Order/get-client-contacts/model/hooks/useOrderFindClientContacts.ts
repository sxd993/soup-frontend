"use client";

import { useMemo } from "react";
import { useGetClientContacts } from "@/features/Order/get-client-contacts";
import type { ClientContactType } from "@/features/Order/get-client-contacts";

const CONTACT_PRIORITY: ClientContactType[] = ["phone", "email", "telegram", "max"];
const EMPTY_CONTACTS: { type: ClientContactType; value: string }[] = [];

export const useOrderFindClientContacts = (
  orderId: number,
) => {
  const query = useGetClientContacts(orderId, orderId > 0);
  const data = query.data;

  const contacts = useMemo(() => {
    const source = Array.isArray(data?.contacts) ? data.contacts : EMPTY_CONTACTS;

    return CONTACT_PRIORITY.reduce<{ type: ClientContactType; value: string }[]>(
      (acc, type) => {
      const item = source.find((contact) => contact.type === type);
      const value = item?.value?.trim();
      if (!value) return acc;

      acc.push({
        type,
        value,
      });

      return acc;
      },
      [],
    );
  }, [data?.contacts]);

  const fullName = data?.full_name?.trim() || null;
  const city = data?.city?.trim() || null;
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
