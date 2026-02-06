export type TariffFeatureValue = number | "all"

export type TariffFeatures = {
    regions?: TariffFeatureValue
    categories?: TariffFeatureValue
    subcategories?: TariffFeatureValue
    photos?: number
    videos?: number
}

export type CompanyTariff = {
    id: number
    name: string
    price: number
    durationDays: number | null
    features: TariffFeatures | null
}

export type CompanyTariffsResponse = {
    tariffs: CompanyTariff[]
}
