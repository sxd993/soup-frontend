export const COMPANY_ORDER_TABS = [
  { id: "responded", label: "Отклики", menuId: 1 },
  { id: "archive", label: "Архив", menuId: 2 },
] as const;

export type CompanyOrderTabStatus = (typeof COMPANY_ORDER_TABS)[number]["id"];
