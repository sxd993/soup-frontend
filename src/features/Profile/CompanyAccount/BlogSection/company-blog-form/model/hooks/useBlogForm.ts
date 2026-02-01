"use client"

import { useCreateBlogForm } from "./useCreateBlogForm"
import { useEditBlogForm } from "./useEditBlogForm"

export type BlogFormMode = "create" | "edit"

export function useBlogForm(mode: BlogFormMode, blogId?: string) {
  const createForm = useCreateBlogForm()
  const editForm = useEditBlogForm(blogId ?? "")

  if (mode === "create") {
    const form = {
      company: createForm.company,
      imageUrl: createForm.imageUrl,
      setImageUrl: createForm.setImageUrl,
      title: createForm.title,
      setTitle: createForm.setTitle,
      description: createForm.description,
      setDescription: createForm.setDescription,
      blocks: createForm.blocks,
      addBlock: createForm.addBlock,
      updateBlock: createForm.updateBlock,
      removeBlock: createForm.removeBlock,
      handleSubmit: createForm.handleSubmit,
      isPending: createForm.isPending,
      isError: createForm.isError,
    }
    return {
      companyLoading: createForm.companyLoading,
      blogNotFound: false,
      form,
      leftButtonLabel: "Сохранить в черновики",
      isSubmitDisabled:
        form.isPending || !form.title.trim() || !form.description.trim() || !form.imageUrl.trim(),
    }
  }

  const form = {
    company: editForm.company,
    imageUrl: editForm.imageUrl,
    setImageUrl: editForm.setImageUrl,
    title: editForm.title,
    setTitle: editForm.setTitle,
    description: editForm.description,
    setDescription: editForm.setDescription,
    blocks: editForm.blocks,
    addBlock: editForm.addBlock,
    updateBlock: editForm.updateBlock,
    removeBlock: editForm.removeBlock,
    handleSubmit: editForm.handleSubmit,
    isPending: editForm.isPending,
    isError: editForm.isError,
  }
  return {
    companyLoading: editForm.companyLoading,
    blogNotFound: editForm.blogNotFound,
    form,
    leftButtonLabel: "Сохранить изменения",
    isSubmitDisabled:
      form.isPending || !form.title.trim() || !form.description.trim() || !form.imageUrl.trim(),
  }
}