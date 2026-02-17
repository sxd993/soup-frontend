"use client";

import { Button, Pagination } from "@/shared/ui";

type CompanyOrderPaginationControlsProps = {
  currentPage: number;
  totalPages: number;
  onShowMore: () => void;
  canShowMore: boolean;
  onPageChange: (page: number) => void;
};

export const CompanyOrderPaginationControls = ({
  currentPage,
  totalPages,
  onShowMore,
  canShowMore,
  onPageChange,
}: CompanyOrderPaginationControlsProps) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-col items-center gap-6">
      {canShowMore ? (
        <Button type="button" onClick={onShowMore} className="w-full px-12">
          Показать еще
        </Button>
      ) : null}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};
