import type { ContentBlock } from "../types/create-blog.types"

function isBlockWithText(b: unknown): b is { type: string; text: string } {
  return typeof b === "object" && b !== null && "type" in b && "text" in b && typeof (b as { text: unknown }).text === "string"
}

function isBlockWithUrl(b: unknown): b is { type: string; url: string } {
  return typeof b === "object" && b !== null && "type" in b && "url" in b && typeof (b as { url: unknown }).url === "string"
}

function isBlockWithItems(b: unknown): b is { type: string; items: unknown[] } {
  return typeof b === "object" && b !== null && "type" in b && "items" in b && Array.isArray((b as { items: unknown }).items)
}

/** Преобразует блоки с API в ContentBlock[] для формы */
export function parseBlocks(raw: unknown[] | null | undefined): ContentBlock[] {
  if (!Array.isArray(raw)) return []
  return raw
    .map((b): ContentBlock | null => {
      if (typeof b !== "object" || b === null || !("type" in b)) return null
      const type = (b as { type: unknown }).type as string
      if (type === "divider") return { type: "divider" }
      if ((type === "paragraph" || type === "subtitle2" || type === "subtitle3") && isBlockWithText(b))
        return { type: type as "paragraph" | "subtitle2" | "subtitle3", text: b.text }
      if (type === "image" && isBlockWithUrl(b)) return { type: "image", url: b.url }
      if ((type === "bulletList" || type === "numberedList") && isBlockWithItems(b)) {
        const items = b.items.map((x) => (typeof x === "string" ? x : String(x)))
        return { type: type as "bulletList" | "numberedList", items }
      }
      return null
    })
    .filter((b): b is ContentBlock => b !== null)
}