import type { CompanyServiceCategory } from "./company-services.types"

export type PublicCompany = {
  id: string
  name: string
  description: string
  logoUrl: string | null
  regions: string[]
  address: string
  phones: { phone: string; representativeName?: string | null }[]
  emails: string[]
  email: string
  socialLinks: {
    website?: string
    vk?: string
    youtube?: string
    whatsapp?: string
    telegram?: string
    yandexDzen?: string
    [key: string]: string | undefined
  }
}

export type CompanyPublicResponse = {
  company: PublicCompany
  services: CompanyServiceCategory[]
}
