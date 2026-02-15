"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from "@/entities/Orders/api/getOrders";
import { ORDERS_QUERY_KEY } from "@/entities/Orders/model/constants/constants";
import type { Order } from "@/entities/Orders/model/types/order.types";
import { useOrderFindFiltersStore } from "@/widgets/OrderFind/Filters/model/store/useOrderFindFiltersStore";
const ITEMS_PER_PAGE = 6;

export function useOrderFindList() {
  const searchParams = useSearchParams();
  const selectedFilters = useOrderFindFiltersStore((s) => s.selectedFilters);
  const selectedRegions = useOrderFindFiltersStore((s) => s.selectedRegions);

  const {
    data: orders = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: [...ORDERS_QUERY_KEY, "active"],
    queryFn: () => getOrders({ status: "active" }),
    staleTime: 2 * 60 * 1000,
  });

  const selectedCategories = useMemo(
    () => [...new Set(selectedFilters.map((f) => f.category))],
    [selectedFilters],
  );

  const filteredOrders = useMemo(() => {
    let list: Order[] = orders;
    if (selectedCategories.length > 0) {
      list = list.filter((o) => selectedCategories.includes(o.category));
    }
    if (selectedRegions.length > 0) {
      list = list.filter((o) => selectedRegions.includes(o.region));
    }
    return list;
  }, [orders, selectedCategories, selectedRegions]);

  const rawPage = Number(searchParams?.get("page") ?? "1");
  const totalPages = Math.max(
    1,
    Math.ceil(filteredOrders.length / ITEMS_PER_PAGE),
  );
  const currentPage = Number.isFinite(rawPage)
    ? Math.min(Math.max(rawPage, 1), totalPages)
    : 1;

  const paginatedOrders = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredOrders.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredOrders, currentPage]);

  return {
    paginatedOrders,
    currentPage,
    totalPages,
    isLoading,
    isError,
    isEmpty: filteredOrders.length === 0,
  };
}
