type PageItem = number | "ellipsis";

export const getPageItems = (totalPages: number): PageItem[] => {
    if (totalPages <= 3) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    return [1, 2, "ellipsis", totalPages];
};