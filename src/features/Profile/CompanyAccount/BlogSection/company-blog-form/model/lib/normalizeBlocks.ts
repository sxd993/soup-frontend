import type { ContentBlock } from "../types/create-blog.types"

export function normalizeBlocks(blocks: ContentBlock[]): unknown[] {
  return blocks
    .map((b) => {
      if (b.type === "divider") return { type: "divider" }
      if (b.type === "paragraph" || b.type === "subtitle2" || b.type === "subtitle3")
        return b.text.trim() ? { type: b.type, text: b.text.trim() } : null
      if (b.type === "image") return b.url.trim() ? { type: "image", url: b.url.trim() } : null
      if (b.type === "bulletList" || b.type === "numberedList") {
        const items = b.items.map((s) => s.trim()).filter(Boolean)
        return items.length ? { type: b.type, items } : null
      }
      return null
    })
    .filter((b): b is NonNullable<typeof b> => b != null)
}