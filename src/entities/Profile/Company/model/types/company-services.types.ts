export type CompanyServiceItem = {
  name: string
  subcategory: string
  imageUrl?: string | null
}

export type CompanyServiceCategory = {
  category: string
  services: CompanyServiceItem[]
}

export type CompanyServicesResponse = {
  categories: CompanyServiceCategory[]
}
