"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useMutation } from "@tanstack/react-query"
import { useSession } from "@/entities/Session"
import { useCompanyProfile } from "@/entities/Profile/Company/model/hooks/useCompanyProfile"
import { createCompanyBlog } from "../api/createCompanyBlog"
import { createEmptyBlock } from "../const/block-options"
import { normalizeBlocks } from "../lib/normalizeBlocks"
import type { ContentBlock } from "../types/create-blog.types"

export function useCreateBlogForm() {
  const router = useRouter()
  const { data: session } = useSession()
  const userId = session?.user?.id
  const { data: company, isLoading: companyLoading } = useCompanyProfile(userId)

  const [imageUrl, setImageUrl] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [blocks, setBlocks] = useState<ContentBlock[]>([])

  const mutation = useMutation({
    mutationFn: createCompanyBlog,
    onSuccess: () => router.push("/profile/company/blog"),
  })

  const addBlock = (type: ContentBlock["type"]) => {
    setBlocks((prev) => [...prev, createEmptyBlock(type)])
  }

  const updateBlock = (index: number, updater: (b: ContentBlock) => ContentBlock) => {
    setBlocks((prev) => prev.map((b, i) => (i === index ? updater(b) : b)))
  }

  const removeBlock = (index: number) => {
    setBlocks((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = (publish: boolean) => (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim() || !description.trim() || !imageUrl.trim()) return
    mutation.mutate({
      imageUrl: imageUrl.trim(),
      title: title.trim(),
      description: description.trim(),
      contentBlocks: blocks.length ? normalizeBlocks(blocks) : undefined,
      publish,
    })
  }

  return {
    company,
    companyLoading,
    imageUrl,
    setImageUrl,
    title,
    setTitle,
    description,
    setDescription,
    blocks,
    addBlock,
    updateBlock,
    removeBlock,
    handleSubmit,
    isPending: mutation.isPending,
    isError: mutation.isError,
  }
}