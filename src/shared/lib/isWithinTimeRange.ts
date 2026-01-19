export const isWithinTimeRange = (date: string | undefined, selectedTimeId: number) => {
    if (selectedTimeId === 3) {
        return true;
    }

    if (!date) {
        return false;
    }

    const parsedDate = new Date(date);
    if (Number.isNaN(parsedDate.getTime())) {
        return false;
    }

    const now = Date.now();
    const msInDay = 24 * 60 * 60 * 1000;
    const diffInDays = (now - parsedDate.getTime()) / msInDay;
    const maxDays = selectedTimeId === 1 ? 7 : 30;

    return diffInDays <= maxDays;
};