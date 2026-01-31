// Блоки контента блога. Порядок в массиве задаёт компания в конструкторе при создании
export type BlogContentBlock =
  | { type: "subtitle2"; text: string }
  | { type: "subtitle3"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "image"; url: string }
  | { type: "divider" }
  | { type: "bulletList"; items: string[] }
  | { type: "numberedList"; items: string[] }