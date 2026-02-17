export const COMPANY_ORDER_TABS = [
  { id: "responded", label: "Отклики" },
  { id: "archive", label: "Архив" },
] as const;

export type CompanyOrderTabStatus = (typeof COMPANY_ORDER_TABS)[number]["id"];
