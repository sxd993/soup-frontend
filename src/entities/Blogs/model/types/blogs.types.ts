export interface Blog {
  id: string
  companyId: number
  title: string
  description: string
  imageUrl: string
  contentBlocks: unknown[] | null
  createdAt: string
  status?: "draft" | "published" | "moderation"
  isPinned?: boolean
  pinnedByCompany?: boolean
  company: { name: string; logo_url?: string | null } | null
  likesCount?: number
  likedByMe?: boolean
}