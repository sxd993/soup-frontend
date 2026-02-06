export type CurrentTariffView = {
    title: string
    remainingLabel: string
    showRenewButton: boolean
}

export type CurrentTariffResponse = {
    currentTariff: {
        id: number
        name: string
        price: number
        durationDays: number | null
        features: Record<string, unknown> | null
    } | null
    daysLeft: number | null
}
