import { useState } from "react"

export const useCatalogFilters = () => {
  const [openSectionIds, setOpenSectionIds] = useState<Set<string>>(
    () => new Set(["design"]),
  )

  const toggleSection = (sectionId: string) => {
    setOpenSectionIds((prev) => {
      const next = new Set(prev)
      if (next.has(sectionId)) {
        next.delete(sectionId)
      } else {
        next.add(sectionId)
      }
      return next
    })
  }

  return { openSectionIds, toggleSection }
}
