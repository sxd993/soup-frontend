export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "subtitle2"; text: string }
  | { type: "subtitle3"; text: string }
  | { type: "image"; url: string }
  | { type: "divider" }
  | { type: "bulletList"; items: string[] }
  | { type: "numberedList"; items: string[] }

export type CreateBlogPayload = {
  imageUrl: string
  title: string
  description: string
  contentBlocks?: unknown[]
  publish?: boolean
}