export type CompanyServiceItem = {
  name: string;
  subcategory: string;
  imageUrl?: string | null;
};

export type CompanyServiceCategory = {
  category: string;
  description?: string;
  services: CompanyServiceItem[];
};

export type CompanyServicesResponse = {
  categories: CompanyServiceCategory[];
};
