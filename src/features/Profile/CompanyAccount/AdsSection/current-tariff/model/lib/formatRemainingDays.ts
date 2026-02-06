export const formatRemainingDays = (days: number | null) =>
    days == null ? "Бессрочно" : `Осталось ${days} дней`
