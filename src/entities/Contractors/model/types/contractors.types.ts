export interface ContractorSubcategory {
  title: string
  logoUrl: string | null
  imageUrl: string | null
}

export interface ContractorsTypes {
  title: string
  logoUrl: string | null
  subcategories: ContractorSubcategory[]
}
