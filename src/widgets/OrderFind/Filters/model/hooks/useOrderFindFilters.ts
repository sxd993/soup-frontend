"use client";

import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useContractors } from "@/entities/Contractors";
import { fetchRegions } from "@/entities/Regions/model/api/fetchRegions";
import type { RegionItemType } from "@/entities/Regions/model/types/RegionItemType";
import { mapContractorsToSections } from "@/shared/lib/catalogFilters";
import { useOrderFindFiltersStore } from "../store/useOrderFindFiltersStore";

export const useOrderFindFilters = () => {
  const [openSectionIds, setOpenSectionIds] = useState<Set<string>>(() => new Set());
  const { data: contractors = [], isLoading, isError } = useContractors();
  const sections = useMemo(() => mapContractorsToSections(contractors), [contractors]);
  const { data: regions = [], isLoading: isRegionsLoading, isError: isRegionsError } = useQuery<
    RegionItemType[]
  >({
    queryKey: ["catalog-regions"],
    queryFn: fetchRegions,
    staleTime: 5 * 60 * 1000,
  });
  const [regionQuery, setRegionQuery] = useState("");
  const selectedFilters = useOrderFindFiltersStore((state) => state.selectedFilters);
  const selectedRegions = useOrderFindFiltersStore((state) => state.selectedRegions);
  const [selectedRegionIds, setSelectedRegionIds] = useState<number[]>([]);
  const toggleSelectedFilter = useOrderFindFiltersStore((state) => state.toggleSelectedFilter);
  const clearSelectedFilters = useOrderFindFiltersStore((state) => state.clearSelectedFilters);
  const toggleSelectedRegion = useOrderFindFiltersStore((state) => state.toggleSelectedRegion);
  const clearSelectedRegions = useOrderFindFiltersStore((state) => state.clearSelectedRegions);

  const toggleSection = (sectionId: string) => {
    setOpenSectionIds((prev) => {
      const next = new Set(prev);
      if (next.has(sectionId)) next.delete(sectionId);
      else next.add(sectionId);
      return next;
    });
  };

  const filteredRegions = useMemo(() => {
    const normalized = regionQuery.trim().toLowerCase();
    if (!normalized) return regions;
    return regions.filter((r) => r.label.toLowerCase().includes(normalized));
  }, [regionQuery, regions]);

  const toggleRegion = (id: number) => {
    const region = regions.find((item) => item.id === id);
    if (region) toggleSelectedRegion(region.label);
    setSelectedRegionIds((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id],
    );
  };

  const sectionItemMap = useMemo(() => {
    const map = new Map<string, { category: string; service: string }>();
    sections.forEach((section) => {
      section.items.forEach((item) => {
        map.set(item.id, { category: section.label, service: item.label });
      });
    });
    return map;
  }, [sections]);

  const selectedSectionItemIds = useMemo(
    () => selectedFilters.map((item) => `${item.category}-${item.service}`),
    [selectedFilters],
  );

  const toggleSectionItem = (id: string) => {
    const target = sectionItemMap.get(id);
    if (target) toggleSelectedFilter(target);
  };

  const resetAll = () => {
    setSelectedRegionIds([]);
    clearSelectedFilters();
    clearSelectedRegions();
    setRegionQuery("");
  };

  useEffect(() => {
    if (regions.length === 0) return;
    const ids = regions.filter((r) => selectedRegions.includes(r.label)).map((r) => r.id);
    setSelectedRegionIds(ids);
  }, [regions, selectedRegions]);

  const isResetDisabled = selectedRegionIds.length === 0 && selectedFilters.length === 0;

  const getSectionMaxHeight = (itemsCount: number, isOpen: boolean) => {
    if (!isOpen) return "0px";
    return `${itemsCount * 32 + Math.max(itemsCount - 1, 0) * 12}px`;
  };

  return {
    openSectionIds,
    toggleSection,
    sections,
    isLoading,
    isError,
    regions,
    isRegionsLoading,
    isRegionsError,
    regionQuery,
    setRegionQuery,
    filteredRegions,
    selectedRegionIds,
    toggleRegion,
    selectedSectionItemIds,
    toggleSectionItem,
    resetAll,
    isResetDisabled,
    getSectionMaxHeight,
  };
};
