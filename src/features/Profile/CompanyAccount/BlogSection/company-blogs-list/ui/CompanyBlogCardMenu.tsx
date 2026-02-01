"use client"

import { DetailsIcon } from "@/shared/ui"
import { FilterMenu } from "@/shared/ui/FilterMenu/ui/FilterMenu"
import { useDropdown } from "@/shared/hooks"

type CompanyBlogCardMenuProps = {
  items: { id: number; title: string }[]
  onSelect: (id: number) => void
}

export function CompanyBlogCardMenu({ items, onSelect }: CompanyBlogCardMenuProps) {
  const dropdown = useDropdown()

  const handleSelect = (id: number) => {
    onSelect(id)
    dropdown.close()
  }

  if (!items.length) return null

  return (
    <div className="relative" ref={dropdown.ref}>
      <button
        type="button"
        onClick={dropdown.toggle}
        className="p-1 rounded-full hover:bg-[#F5F5F5] transition-colors cursor-pointer"
        aria-expanded={dropdown.isOpen}
        aria-haspopup="true"
      >
        <DetailsIcon />
      </button>
      {dropdown.isOpen && (
        <FilterMenu items={items} className="w-35!" onSelect={handleSelect} />
      )}
    </div>
  )
}
