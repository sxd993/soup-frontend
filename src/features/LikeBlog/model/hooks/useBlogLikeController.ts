"use client"

import { useBlogLikeQuery } from "./useBlogLikeQuery"
import { useToggleBlogLike } from "./useToggleBlogLike"
import { useBlogLikeState } from "./useBlogLikeState"
import { useSession } from "@/entities/Session"
import { useEffect, useRef, useMemo } from "react"
import { useQueryClient } from "@tanstack/react-query"
import type { Blog } from "@/entities/Blogs/model/types/blogs.types"

type BlogLikeData = {
  liked: boolean
  likeCount: number
}

export function useBlogLikeController(blogId: string) {
  const { data: session } = useSession()
  const isAuthorized = Boolean(session?.user)
  const queryClient = useQueryClient()

  const blogFromCache = useMemo(() => {
    const blogsCache = queryClient.getQueryData<Blog[]>(["blogs"])
    const companyBlogsCache = queryClient.getQueryData<Blog[]>(["company-blogs"])
    const companyBlogsPublicCache = queryClient.getQueryData<Blog[]>(["company-blogs-public"])
    
    return blogsCache?.find(b => b.id === blogId) 
      || companyBlogsCache?.find(b => b.id === blogId)
      || companyBlogsPublicCache?.find(b => b.id === blogId)
      || null
  }, [blogId])

  const initialData: BlogLikeData = useMemo(() => ({
    liked: blogFromCache?.likedByMe ?? false,
    likeCount: blogFromCache?.likesCount ?? 0
  }), [blogFromCache])
  
  const { data: likeQueryData } = useBlogLikeQuery(
    blogId, 
    isAuthorized ? initialData : undefined
  )
  const toggleMutation = useToggleBlogLike(blogId)
  
  const serverData = likeQueryData || initialData
  const { state, applyOptimistic, rollback, sync } = useBlogLikeState(
    serverData.liked, 
    serverData.likeCount
  )
  
  const originalStateRef = useRef<BlogLikeData>(initialData)

  useEffect(() => {
    if (likeQueryData) {
      sync(likeQueryData.liked, likeQueryData.likeCount)
      originalStateRef.current = { 
        liked: likeQueryData.liked, 
        likeCount: likeQueryData.likeCount 
      }
    } else {
      sync(initialData.liked, initialData.likeCount)
      originalStateRef.current = initialData
    }
  }, [likeQueryData, initialData, sync])

  useEffect(() => {
    if (toggleMutation.isSuccess && toggleMutation.data) {
      sync(toggleMutation.data.liked, toggleMutation.data.likeCount)
      originalStateRef.current = {
        liked: toggleMutation.data.liked,
        likeCount: toggleMutation.data.likeCount,
      }
    }
  }, [toggleMutation.isSuccess, toggleMutation.data, sync])

  const handleToggle = async () => {
    if (!isAuthorized || toggleMutation.isPending) return

    const currentLiked = state.liked
    const currentLikeCount = state.likeCount

    originalStateRef.current = { liked: currentLiked, likeCount: currentLikeCount }
    applyOptimistic(!currentLiked)

    try {
      await toggleMutation.mutateAsync()
    } catch {
      rollback(originalStateRef.current.liked, originalStateRef.current.likeCount)
    }
  }

  return {
    liked: state.liked,
    likeCount: state.likeCount,
    onToggle: handleToggle,
    disabled: !isAuthorized || toggleMutation.isPending,
    isPending: toggleMutation.isPending,
  }
}
