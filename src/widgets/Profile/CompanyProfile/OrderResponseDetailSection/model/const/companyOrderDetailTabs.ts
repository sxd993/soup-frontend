export const COMPANY_ORDER_DETAIL_TABS = [
  { id: "details", label: "Детали" },
  { id: "response", label: "Ваш отклик" },
] as const;

export type CompanyOrderDetailTab = (typeof COMPANY_ORDER_DETAIL_TABS)[number]["id"];
