export const BLOG_TABS = [
  { id: "all", label: "Все" },
  { id: "published", label: "Опубликованные" },
  { id: "drafts", label: "Черновики" },
] as const

export type BlogTabStatus = (typeof BLOG_TABS)[number]["id"]