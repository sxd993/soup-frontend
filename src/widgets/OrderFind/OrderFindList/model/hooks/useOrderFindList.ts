"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from "@/entities/Orders/api/getOrders";
import { ORDERS_QUERY_KEY } from "@/entities/Orders/model/constants/constants";
import type { Order } from "@/entities/Orders/model/types/order.types";
import { useOrderFindFiltersStore } from "@/widgets/OrderFind/Filters/model/store/useOrderFindFiltersStore";

const ITEMS_PER_PAGE = 6;
const SORT_OPTIONS = [
  { id: 1, title: "Новые", value: "new" as const },
  { id: 2, title: "Без откликов", value: "no-responses" as const },
];

export function useOrderFindList() {
  const searchParams = useSearchParams();
  const selectedFilters = useOrderFindFiltersStore((s) => s.selectedFilters);
  const selectedRegions = useOrderFindFiltersStore((s) => s.selectedRegions);
  const [selectedSortId, setSelectedSortId] = useState<number>(
    SORT_OPTIONS[0].id,
  );

  const selectedSort =
    SORT_OPTIONS.find((option) => option.id === selectedSortId)?.value ?? "new";
  const sortKey = useMemo(() => selectedSort, [selectedSort]);
  const [debouncedSortKey, setDebouncedSortKey] = useState(sortKey);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSortKey(sortKey);
    }, 300);
    return () => clearTimeout(timer);
  }, [sortKey]);

  const filtersKey = useMemo(
    () =>
      selectedFilters
        .map((item) => `${item.category}||${item.service}`)
        .sort((a, b) => a.localeCompare(b, "ru", { sensitivity: "base" }))
        .join(","),
    [selectedFilters],
  );
  const regionsKey = useMemo(
    () =>
      [...selectedRegions]
        .sort((a, b) => a.localeCompare(b, "ru", { sensitivity: "base" }))
        .join(","),
    [selectedRegions],
  );
  const [debouncedFiltersKey, setDebouncedFiltersKey] = useState(filtersKey);
  const [debouncedRegionsKey, setDebouncedRegionsKey] = useState(regionsKey);
  const [debouncedFilters, setDebouncedFilters] = useState(selectedFilters);
  const [debouncedRegions, setDebouncedRegions] = useState(selectedRegions);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedFiltersKey(filtersKey);
      setDebouncedRegionsKey(regionsKey);
      setDebouncedFilters(selectedFilters);
      setDebouncedRegions(selectedRegions);
    }, 500);
    return () => clearTimeout(timer);
  }, [filtersKey, selectedFilters, regionsKey, selectedRegions]);

  const {
    data: orders = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: [
      ...ORDERS_QUERY_KEY,
      "active",
      debouncedFiltersKey,
      debouncedRegionsKey,
      debouncedSortKey,
    ],
    queryFn: () => getOrders({ status: "active", sort: debouncedSortKey }),
    staleTime: 2 * 60 * 1000,
  });

  const selectedCategories = useMemo(
    () => [...new Set(debouncedFilters.map((f) => f.category))],
    [debouncedFilters],
  );

  const filteredOrders = useMemo(() => {
    let list: Order[] = orders;
    if (selectedCategories.length > 0) {
      list = list.filter((o) => selectedCategories.includes(o.category));
    }
    if (debouncedRegions.length > 0) {
      list = list.filter((o) => debouncedRegions.includes(o.region));
    }
    return list;
  }, [orders, selectedCategories, debouncedRegions]);

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

  const selectedSortTitle =
    SORT_OPTIONS.find((option) => option.id === selectedSortId)?.title ??
    SORT_OPTIONS[0].title;

  const selectSort = (id: number) => {
    setSelectedSortId(id);
  };

  return {
    paginatedOrders,
    currentPage,
    totalPages,
    isLoading,
    isError,
    isEmpty: filteredOrders.length === 0,
    sortOptions: SORT_OPTIONS,
    selectedSortId,
    selectedSortTitle,
    selectSort,
  };
}
