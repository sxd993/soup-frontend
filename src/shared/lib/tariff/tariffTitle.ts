export const normalizeTariffName = (name?: string | null) => {
    if (!name) return ""
    return name
}

export const resolveTariffTitle = (name: string) => {
    switch (name) {
        case "basic":
            return "Базовый"
        case "start":
            return "Старт"
        case "business":
            return "Бизнес"
        case "premium":
            return "Премиум"
        case "vip":
            return "VIP"
        default:
            return name
    }
}
