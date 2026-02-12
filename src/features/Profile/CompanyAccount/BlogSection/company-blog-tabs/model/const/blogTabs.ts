export const BLOG_TABS = [
  { id: "all", label: "Все", menuId: 1 },
  { id: "published", label: "Опубликованные", menuId: 2 },
  { id: "drafts", label: "Черновики", menuId: 3 },
] as const

export type BlogTabStatus = (typeof BLOG_TABS)[number]["id"]
export type BlogTabMenuId = (typeof BLOG_TABS)[number]["menuId"]