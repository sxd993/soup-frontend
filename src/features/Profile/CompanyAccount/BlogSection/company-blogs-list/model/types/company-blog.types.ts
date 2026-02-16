export type CompanyBlogStatus = "all" | "published" | "drafts" | "moderation"

export interface CompanyBlogItem {
  id: string
  type: "published" | "draft" | "moderation"
  companyId: number
  title: string
  description: string
  imageUrl: string
  contentBlocks: unknown[] | null
  createdAt: string
  isPinned: boolean
  pinnedByCompany: boolean
  companyName: string
  companyLogoUrl: string | null
}