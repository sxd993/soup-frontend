"use client";

import { BlackButton } from "@/shared/ui";
import { Pagination } from "@/shared/ui/Pagination/ui/Pagination";

type OrderPaginationControlsProps = {
  currentPage: number;
  totalPages: number;
  onShowMore: () => void;
  canShowMore: boolean;
  onPageChange: (page: number) => void;
};

export const OrderPaginationControls = ({
  currentPage,
  totalPages,
  onShowMore,
  canShowMore,
  onPageChange,
}: OrderPaginationControlsProps) => {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex flex-col items-center gap-6">
      {canShowMore && (
        <BlackButton type="button" onClick={onShowMore} className="w-full px-12">
          Показать еще
        </BlackButton>
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};
