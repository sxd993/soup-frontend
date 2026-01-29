import { useEffect, useMemo, useRef, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { getContractors, type ContractorsTypes } from "@/entities/Contractors"

type ServiceCategory = {
  id: string
  title: string
  description: string
  services: string[]
}

export const useCompanyServices = () => {
  const { data: categories = [], isLoading, isError } = useQuery<ContractorsTypes[]>({
    queryKey: ["company-services-categories"],
    queryFn: getContractors,
    staleTime: 5 * 60 * 1000,
  })

  const [selectedCategories, setSelectedCategories] = useState<ServiceCategory[]>([])
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false)
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false)
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [isServiceSelectOpen, setIsServiceSelectOpen] = useState(false)
  const categoryMenuRef = useRef<HTMLDivElement | null>(null)

  const availableCategories = useMemo(
    () => categories.filter((category) => !selectedCategories.some((item) => item.id === category.title)),
    [categories, selectedCategories],
  )

  const activeCategory = useMemo(
    () => categories.find((category) => category.title === activeCategoryId) ?? null,
    [categories, activeCategoryId],
  )

  const activeCategoryServices = useMemo(() => activeCategory?.badges ?? [], [activeCategory])

  const toggleCategoryMenu = () => setIsCategoryMenuOpen((prev) => !prev)

  const addCategory = (category: ContractorsTypes) => {
    setSelectedCategories((prev) => [
      ...prev,
      { id: category.title, title: category.title, description: "", services: [] },
    ])
    setIsCategoryMenuOpen(false)
  }

  const setCategoryDescription = (id: string, value: string) => {
    setSelectedCategories((prev) =>
      prev.map((item) => (item.id === id ? { ...item, description: value } : item)),
    )
  }

  const openServiceModal = (categoryId: string) => {
    setActiveCategoryId(categoryId)
    setSelectedService(null)
    setIsServiceSelectOpen(false)
    setIsServiceModalOpen(true)
  }

  const closeServiceModal = () => {
    setIsServiceModalOpen(false)
    setSelectedService(null)
    setIsServiceSelectOpen(false)
  }

  const addServiceToCategory = () => {
    if (!activeCategoryId || !selectedService) return
    setSelectedCategories((prev) =>
      prev.map((item) =>
        item.id === activeCategoryId && !item.services.includes(selectedService)
          ? { ...item, services: [...item.services, selectedService] }
          : item,
      ),
    )
    setIsServiceModalOpen(false)
    setIsServiceSelectOpen(false)
  }

  const removeServiceFromCategory = (categoryId: string, service: string) => {
    setSelectedCategories((prev) =>
      prev.map((item) =>
        item.id === categoryId
          ? { ...item, services: item.services.filter((value) => value !== service) }
          : item,
      ),
    )
  }

  useEffect(() => {
    if (!isCategoryMenuOpen) return
    const handleClickOutside = (event: MouseEvent) => {
      if (!categoryMenuRef.current) return
      if (categoryMenuRef.current.contains(event.target as Node)) return
      setIsCategoryMenuOpen(false)
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isCategoryMenuOpen])

  const toggleServiceSelect = () => setIsServiceSelectOpen((prev) => !prev)
  const handleSelectService = (service: string) => {
    setSelectedService(service)
    setIsServiceSelectOpen(false)
  }

  return {
    request: {
      categories,
      isLoading,
      isError,
    },
    categoryMenu: {
      availableCategories,
      isOpen: isCategoryMenuOpen,
      toggle: toggleCategoryMenu,
      addCategory,
      ref: categoryMenuRef,
    },
    categoryServices: {
      selectedCategories,
      setCategoryDescription,
      openServiceModal,
      removeServiceFromCategory,
    },
    serviceModal: {
      isOpen: isServiceModalOpen,
      close: closeServiceModal,
      addService: addServiceToCategory,
      services: activeCategoryServices,
      selectedService,
      selectService: handleSelectService,
      isSelectOpen: isServiceSelectOpen,
      toggleSelect: toggleServiceSelect,
    },
  }
}
