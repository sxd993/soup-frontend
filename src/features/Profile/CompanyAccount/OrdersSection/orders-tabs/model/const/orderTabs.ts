export const ORDER_TABS = [
    { id: "responded", label: "Вы откликнулись" },
    { id: "in_work", label: "В работе" },
    { id: "completed", label: "Выполненные" },
    { id: "archive", label: "Архив" },
] as const

export type OrderStatus = (typeof ORDER_TABS)[number]["id"]
