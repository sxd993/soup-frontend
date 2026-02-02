import type { CompanyServiceCategory } from "./company-services.types"

export type PublicCompany = {
  id: string
  name: string
  description: string
  logoUrl: string | null
  regions: string[]
}

export type CompanyPublicResponse = {
  company: PublicCompany
  services: CompanyServiceCategory[]
}
