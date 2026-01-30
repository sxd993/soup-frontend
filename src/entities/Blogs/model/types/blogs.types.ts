export interface Blog {
  id: string
  companyId: number
  title: string
  description: string
  imageUrl: string
  contentBlocks: unknown[] | null
  createdAt: string
  isPinned?: boolean
  company: { name: string; logo_url?: string | null } | null
}