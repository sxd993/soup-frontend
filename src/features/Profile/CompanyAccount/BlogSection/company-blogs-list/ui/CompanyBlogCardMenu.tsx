"use client";

import { DetailsIcon } from "@/shared/ui";
import { FilterMenu } from "@/shared/ui/FilterMenu/ui/FilterMenu";
import { useDropdown } from "@/shared/hooks";

type CompanyBlogCardMenuProps = {
  items: { id: number; title: string }[];
  onSelect: (id: number) => void;
};

export function CompanyBlogCardMenu({
  items,
  onSelect,
}: CompanyBlogCardMenuProps) {
  const dropdown = useDropdown();

  const handleSelect = (id: number) => {
    onSelect(id);
    dropdown.close();
  };

  if (!items.length) return null;

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    dropdown.toggle();
  };

  return (
    <div className="relative z-50" ref={dropdown.ref} onClick={(e) => e.stopPropagation()}>
      <button
        type="button"
        onClick={handleToggle}
        className="p-1 rounded-full hover:bg-[#F5F5F5] transition-colors cursor-pointer"
        aria-expanded={dropdown.isOpen}
        aria-haspopup="true"
      >
        <DetailsIcon />
      </button>
      {dropdown.isOpen && (
        <div onClick={(e) => e.stopPropagation()}>
          <FilterMenu
            items={items}
            className="w-35! z-100"
            onSelect={handleSelect}
          />
        </div>
      )}
    </div>
  );
}
