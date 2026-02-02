export type CompanyServiceItem = {
  name: string
  subcategory: string
}

export type CompanyServiceCategory = {
  category: string
  services: CompanyServiceItem[]
}

export type CompanyServicesResponse = {
  categories: CompanyServiceCategory[]
}
