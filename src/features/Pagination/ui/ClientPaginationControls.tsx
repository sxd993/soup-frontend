'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { useCurrentPath } from "@/shared/hooks";
import { BlackButton } from "@/shared/ui";
import { Pagination } from "@/shared/ui/Pagination/ui/Pagination";

interface ClientPaginationControlsProps {
  currentPage: number;
  totalPages: number;
  pageParam?: string;
}

export const ClientPaginationControls = ({
  currentPage,
  totalPages,
  pageParam = "page",
}: ClientPaginationControlsProps) => {
  const router = useRouter();
  const pathname = useCurrentPath();
  const searchParams = useSearchParams();

  if (totalPages <= 1) {
    return null;
  }

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams?.toString() ?? "");
    params.set(pageParam, String(page));
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleShowMore = () => {
    const nextPage = Math.min(currentPage + 1, totalPages);
    const params = new URLSearchParams(searchParams?.toString() ?? "");
    params.set(pageParam, String(nextPage));
    router.push(`${pathname}?${params.toString()}`);
  };

  const canShowMore = currentPage < totalPages;

  return (
    <div className="flex flex-col items-center gap-6">
      {canShowMore && (
        <BlackButton type="button" onClick={handleShowMore} className="w-full px-12">
          Показать еще
        </BlackButton>
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
