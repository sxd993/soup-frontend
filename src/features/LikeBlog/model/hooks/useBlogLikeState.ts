"use client"

import { useState, useCallback } from "react"

type BlogLikeState = {
  liked: boolean
  likeCount: number
}

export function useBlogLikeState(initialLiked: boolean, initialLikeCount: number) {
  const [state, setState] = useState<BlogLikeState>({
    liked: initialLiked,
    likeCount: initialLikeCount,
  })

  const applyOptimistic = useCallback((liked: boolean) => {
    setState((prev) => ({
      liked,
      likeCount: liked ? prev.likeCount + 1 : Math.max(0, prev.likeCount - 1),
    }))
  }, [])

  const rollback = useCallback((originalLiked: boolean, originalLikeCount: number) => {
    setState({
      liked: originalLiked,
      likeCount: originalLikeCount,
    })
  }, [])

  const sync = useCallback((liked: boolean, likeCount: number) => {
    setState({ liked, likeCount })
  }, [])

  return {
    state,
    applyOptimistic,
    rollback,
    sync,
  }
}
