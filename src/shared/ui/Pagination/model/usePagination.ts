import { useScrollToTop } from "./useScrollToTop";
import { getPageItems } from "./getPageItems";

type UsePaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

export const usePagination = ({ currentPage, totalPages, onPageChange }: UsePaginationProps) => {
    const { scrollToTop } = useScrollToTop();

    const handlePageChange = (page: number) => {
        onPageChange(page);
        scrollToTop();
    };

    const isPrevDisabled = currentPage <= 1;
    const isNextDisabled = currentPage >= totalPages;
    const pageItems = getPageItems(totalPages);

    return {
        handlePageChange,
        isPrevDisabled,
        isNextDisabled,
        pageItems,
    };
};