"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useSession } from "@/entities/Session"
import { useCompanyProfile } from "@/entities/Profile/Company/model/hooks/useCompanyProfile"
import { getCompanyBlog, updateCompanyBlog, publishCompanyBlog } from "@/features/Profile/CompanyAccount/BlogSection/get-company-blogs"
import { createEmptyBlock } from "../const/block-options"
import { normalizeBlocks } from "../lib/normalizeBlocks"
import { parseBlocks } from "../lib/parseBlocks"
import type { ContentBlock } from "../types/create-blog.types"

export function useEditBlogForm(blogId: string) {
  const router = useRouter()
  const queryClient = useQueryClient()
  const { data: session } = useSession()
  const userId = session?.user?.id
  const { data: company, isLoading: companyLoading } = useCompanyProfile(userId)

  const [imageUrl, setImageUrl] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [blocks, setBlocks] = useState<ContentBlock[]>([])

  const { data: blog, isLoading: blogLoading } = useQuery({
    queryKey: ["company-blog", blogId],
    queryFn: () => getCompanyBlog(blogId),
    enabled: Boolean(blogId),
  })

  useEffect(() => {
    if (!blog) return
    setImageUrl(blog.imageUrl ?? "")
    setTitle(blog.title ?? "")
    setDescription(blog.description ?? "")
    setBlocks(parseBlocks(blog.contentBlocks ?? []))
  }, [blog])

  const updateMutation = useMutation({
    mutationFn: (payload: { imageUrl: string; title: string; description: string; contentBlocks?: unknown[] }) =>
      updateCompanyBlog(blogId, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["company-blog", blogId] })
      queryClient.invalidateQueries({ queryKey: ["company-blogs"] })
    },
  })

  const publishMutation = useMutation({
    mutationFn: () => publishCompanyBlog(blogId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["company-blogs"] })
      router.push("/profile/company/blog")
    },
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
    const payload = {
      imageUrl: imageUrl.trim(),
      title: title.trim(),
      description: description.trim(),
      contentBlocks: blocks.length ? normalizeBlocks(blocks) : undefined,
    }
    if (publish) {
      updateMutation.mutate(payload, {
        onSuccess: () => publishMutation.mutate(),
      })
    } else {
      updateMutation.mutate(payload)
    }
  }

  const isPending = updateMutation.isPending || publishMutation.isPending
  const isError = updateMutation.isError || publishMutation.isError

  return {
    company,
    companyLoading: companyLoading || blogLoading,
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
    isPending,
    isError,
    blogNotFound: !blogLoading && (!blog || blog.type !== "draft"),
  }
}