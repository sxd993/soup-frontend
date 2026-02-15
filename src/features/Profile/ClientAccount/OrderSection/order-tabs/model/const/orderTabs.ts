export const ORDER_TABS = [
  { id: "active", label: "Активные", menuId: 1 },
  { id: "completed", label: "Завершенные", menuId: 2 },
  { id: "moderation", label: "На модерации", menuId: 3 },
] as const

export type OrderTabStatus = (typeof ORDER_TABS)[number]["id"]
export type OrderTabMenuId = (typeof ORDER_TABS)[number]["menuId"]
