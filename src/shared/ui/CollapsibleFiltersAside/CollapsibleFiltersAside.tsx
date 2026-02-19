"use client";

import { useState, type ReactNode } from "react";
import { useMediaQuery } from "@/shared/hooks";

const LG_BREAKPOINT = "(min-width: 1024px)";

type CollapsibleFiltersAsideProps = {
  children: ReactNode;
};

export const CollapsibleFiltersAside = ({ children }: CollapsibleFiltersAsideProps) => {
  const isLg = useMediaQuery(LG_BREAKPOINT);
  const [isFiltersOpen, setFiltersOpen] = useState(false);
  const showContent = isLg || isFiltersOpen;

  return (
    <aside className="flex flex-col gap-8">
      {!isLg && (
        <button
          type="button"
          onClick={() => setFiltersOpen((prev) => !prev)}
          className="flex h-12 w-full items-center justify-between rounded-full bg-white px-4 text-left text-[16px] font-semibold leading-[140%] text-secondary"
          aria-expanded={showContent}
        >
          Фильтры
          <span
            className={`block h-4 w-4 transition-transform ${showContent ? "rotate-180" : ""}`}
            aria-hidden
          >
            <svg viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 7L6 2L11 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      )}
      {showContent && children}
    </aside>
  );
};
