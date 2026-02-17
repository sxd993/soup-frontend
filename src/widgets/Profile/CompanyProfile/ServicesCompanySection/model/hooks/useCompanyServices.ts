import { useEffect, useMemo, useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { type ContractorsTypes, useContractors } from "@/entities/Contractors";
import {
  getCompanyServices,
  saveCompanyServices,
  uploadCompanyServiceImage,
} from "@/entities/Profile/Company/model/api/company-services.api";
import type {
  CompanyServiceCategory,
  CompanyServiceItem,
} from "@/entities/Profile/Company/model/types/company-services.types";
import { showSuccessToast, showErrorToast } from "@/shared/ui";
import { getErrorMessage } from "@/shared/lib";

type ServiceCategory = {
  id: string;
  title: string;
  description?: string;
  services: CompanyServiceItem[];
};

export const useCompanyServices = () => {
  const queryClient = useQueryClient();
  const { data: categories = [], isLoading, isError } = useContractors();
  const {
    data: savedServices,
    isLoading: isSavedLoading,
    isError: isSavedError,
  } = useQuery({
    queryKey: ["company-services"],
    queryFn: getCompanyServices,
    staleTime: 2 * 60 * 1000,
  });

  const [selectedCategories, setSelectedCategories] = useState<
    ServiceCategory[]
  >([]);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isServiceSelectOpen, setIsServiceSelectOpen] = useState(false);
  const [serviceName, setServiceName] = useState("");
  const [serviceImageUrl, setServiceImageUrl] = useState<string | null>(null);
  const [collapsedCategories, setCollapsedCategories] = useState<Set<string>>(
    new Set(),
  );
  const categoryMenuRef = useRef<HTMLDivElement | null>(null);
  const isHydratedRef = useRef(false);
  const lastSavedRef = useRef("");

  const saveMutation = useMutation({
    mutationKey: ["save-company-services"],
    mutationFn: (payload: CompanyServiceCategory[]) =>
      saveCompanyServices(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["company-services"] });
    },
  });
  const uploadImageMutation = useMutation({
    mutationKey: ["upload-company-service-image"],
    mutationFn: uploadCompanyServiceImage,
    onSuccess: (data) => {
      setServiceImageUrl(data.url);
    },
  });

  const availableCategories = useMemo(
    () =>
      categories.filter(
        (category) =>
          !selectedCategories.some((item) => item.id === category.title),
      ),
    [categories, selectedCategories],
  );

  const activeCategory = useMemo(
    () =>
      categories.find((category) => category.title === activeCategoryId) ??
      null,
    [categories, activeCategoryId],
  );

  const activeCategoryServices = useMemo(
    () =>
      activeCategory?.subcategories.map((subcategory) => subcategory.title) ??
      [],
    [activeCategory],
  );

  useEffect(() => {
    if (!savedServices || isHydratedRef.current) return;
    const mapped = savedServices.categories.map((category) => ({
      id: category.category,
      title: category.category,
      description: category.description ?? "",
      services: category.services,
    }));
    setSelectedCategories(mapped);
    isHydratedRef.current = true;
    lastSavedRef.current = JSON.stringify(mapped);
  }, [savedServices]);

  const toggleCategoryMenu = () => setIsCategoryMenuOpen((prev) => !prev);

  const toggleCategoryCollapse = (categoryId: string) => {
    setCollapsedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(categoryId)) {
        next.delete(categoryId);
      } else {
        next.add(categoryId);
      }
      return next;
    });
  };

  const addCategory = (category: ContractorsTypes) => {
    setSelectedCategories((prev) => [
      ...prev,
      {
        id: category.title,
        title: category.title,
        description: "",
        services: [],
      },
    ]);
    setIsCategoryMenuOpen(false);
  };

  const updateCategoryDescription = (
    categoryId: string,
    description: string,
  ) => {
    setSelectedCategories((prev) =>
      prev.map((item) =>
        item.id === categoryId ? { ...item, description } : item,
      ),
    );
  };

  const openServiceModal = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    setSelectedService(null);
    setServiceName("");
    setServiceImageUrl(null);
    setIsServiceSelectOpen(false);
    setIsServiceModalOpen(true);
  };

  const closeServiceModal = () => {
    setIsServiceModalOpen(false);
    setSelectedService(null);
    setServiceName("");
    setServiceImageUrl(null);
    setIsServiceSelectOpen(false);
  };

  const addServiceToCategory = () => {
    if (!activeCategoryId || !serviceName.trim() || !selectedService) return;
    setSelectedCategories((prev) =>
      prev.map((item) =>
        item.id === activeCategoryId
          ? {
              ...item,
              services: [
                ...item.services,
                {
                  name: serviceName.trim(),
                  subcategory: selectedService,
                  imageUrl: serviceImageUrl,
                },
              ],
            }
          : item,
      ),
    );
    setIsServiceModalOpen(false);
    setServiceName("");
    setServiceImageUrl(null);
    setIsServiceSelectOpen(false);
  };

  const removeServiceFromCategory = (categoryId: string, index: number) => {
    setSelectedCategories((prev) =>
      prev.map((item) =>
        item.id === categoryId
          ? {
              ...item,
              services: item.services.filter((_, idx) => idx !== index),
            }
          : item,
      ),
    );
  };

  const saveAndSendToModeration = () => {
    const payload: CompanyServiceCategory[] = selectedCategories
      .filter((category) => category.services.length > 0)
      .map((category) => ({
        category: category.title,
        description: category.description || undefined,
        services: category.services,
      }));
    lastSavedRef.current = JSON.stringify(payload);
    saveMutation.mutate(payload, {
      onSuccess: () => {
        showSuccessToast(
          "Услуги отправлены на модерацию",
          "Изменения сохранены и отправлены на модерацию.",
        );
      },
      onError: (error) => {
        showErrorToast(
          "Не удалось сохранить",
          getErrorMessage(error, "Попробуйте ещё раз."),
        );
      },
    });
  };

  useEffect(() => {
    if (!isCategoryMenuOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (!categoryMenuRef.current) return;
      if (categoryMenuRef.current.contains(event.target as Node)) return;
      setIsCategoryMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isCategoryMenuOpen]);

  const toggleServiceSelect = () => setIsServiceSelectOpen((prev) => !prev);
  const handleSelectService = (service: string) => {
    setSelectedService(service);
    setIsServiceSelectOpen(false);
  };

  const handleServiceImageUpload = (file: File) => {
    uploadImageMutation.mutate(file);
  };

  // Автосохранение отключено - сохранение происходит только по кнопке "Сохранить и отправить на модерацию"

  return {
    request: {
      categories,
      isLoading: isLoading || isSavedLoading,
      isError: isError || isSavedError,
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
      openServiceModal,
      removeServiceFromCategory,
      collapsedCategories,
      toggleCategoryCollapse,
      updateCategoryDescription,
      saveAndSendToModeration,
      isSavePending: saveMutation.isPending,
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
      isAddDisabled: !serviceName.trim() || !selectedService,
      serviceName,
      setServiceName,
      serviceImageUrl,
      handleServiceImageUpload,
      isImageUploading: uploadImageMutation.isPending,
    },
  };
};
