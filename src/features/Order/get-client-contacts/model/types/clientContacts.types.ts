export type ClientContactType = "phone" | "email" | "telegram" | "max";

export type ClientContactItem = {
  type: ClientContactType;
  value: string;
};

export type ClientContactsResponse = {
  full_name: string | null;
  city: string | null;
  avatar_url: string | null;
  contacts: ClientContactItem[];
};

