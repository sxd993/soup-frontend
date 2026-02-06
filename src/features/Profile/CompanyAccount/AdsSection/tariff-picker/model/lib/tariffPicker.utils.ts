import type { TariffFeatures } from "../types/tariffs.types"

export const formatTariffPrice = (price: number) =>
    `${new Intl.NumberFormat("ru-RU").format(price)} ₽ в месяц`

export const buildTariffFeatureItems = (features?: TariffFeatures | null) => {
    if (!features) return []

    const items: string[] = []

    if (features.regions !== undefined) {
        if (features.regions === "all") {
            items.push("+ все регионы")
        } else {
            items.push(`+ ${features.regions} регионов`)
        }
    }

    if (features.categories !== undefined || features.subcategories !== undefined) {
        if (features.categories === "all" || features.subcategories === "all") {
            items.push("+ все категории и подкатегории")
        } else if (features.categories !== undefined && features.subcategories !== undefined) {
            items.push(
                `+ ${features.categories} категории и в них ${features.subcategories} подкатегории`
            )
        }
    }

    if (features.photos !== undefined) {
        items.push(`+ ${features.photos} фото работ`)
    }

    if (features.videos !== undefined && features.videos > 0) {
        items.push(`+ ${features.videos} видео`)
    }

    return items
}
