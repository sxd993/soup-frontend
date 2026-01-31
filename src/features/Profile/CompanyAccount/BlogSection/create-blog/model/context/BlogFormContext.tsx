"use client"

import { createContext, useContext } from "react"
import type { ContentBlock } from "../types/create-blog.types"

export type BlogFormContextValue = {
  company?: { name?: string | null; logo_url?: string | null } | null
  imageUrl: string
  setImageUrl: (v: string) => void
  title: string
  setTitle: (v: string) => void
  description: string
  setDescription: (v: string) => void
  blocks: ContentBlock[]
  addBlock: (type: ContentBlock["type"]) => void
  updateBlock: (index: number, updater: (b: ContentBlock) => ContentBlock) => void
  removeBlock: (index: number) => void
  handleSubmit: (publish: boolean) => (e: React.FormEvent) => void
  isPending: boolean
  isError: boolean
}

const BlogFormContext = createContext<BlogFormContextValue | null>(null)

export function BlogFormProvider({
  value,
  children,
}: {
  value: BlogFormContextValue
  children: React.ReactNode
}) {
  return (
    <BlogFormContext.Provider value={value}>
      {children}
    </BlogFormContext.Provider>
  )
}

export function useBlogFormContext() {
  const ctx = useContext(BlogFormContext)
  if (!ctx) throw new Error("useBlogFormContext must be used within BlogFormProvider")
  return ctx
}