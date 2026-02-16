export const BLOG_TABS = [
  { id: "published", label: "Опубликованные", menuId: 1 },
  { id: "moderation", label: "На модерации", menuId: 2 },
  { id: "drafts", label: "Черновики", menuId: 3 },
] as const

export type BlogTabStatus = (typeof BLOG_TABS)[number]["id"]
export type BlogTabMenuId = (typeof BLOG_TABS)[number]["menuId"]