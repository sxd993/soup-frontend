import type { ContentBlock } from "../types/create-blog.types"

export const BLOCK_OPTIONS: { type: ContentBlock["type"]; label: string }[] = [
  { type: "paragraph", label: "Текст" },
  { type: "subtitle2", label: "Подзаголовок 2" },
  { type: "subtitle3", label: "Подзаголовок 3" },
  { type: "image", label: "Изображение" },
  { type: "bulletList", label: "Маркированный список" },
  { type: "numberedList", label: "Нумерованный список" },
  { type: "divider", label: "Разделитель" },
]

export function createEmptyBlock(type: ContentBlock["type"]): ContentBlock {
  switch (type) {
    case "paragraph":
    case "subtitle2":
    case "subtitle3":
      return { type, text: "" }
    case "image":
      return { type, url: "" }
    case "bulletList":
    case "numberedList":
      return { type, items: [""] }
    case "divider":
      return { type }
  }
}