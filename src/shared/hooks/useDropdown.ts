"use client"

import { useEffect, useRef, useState } from "react"

export function useDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isOpen])

  const toggle = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    setIsOpen((prev) => !prev)
  }

  const close = () => setIsOpen(false)

  return { isOpen, ref, toggle, close }
}