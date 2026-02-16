export type CatalogFilterItem = {
  id: string;
  label: string;
  logoUrl?: string | null;
  isSelected?: boolean;
};

export type CatalogFilterSection = {
  id: string;
  label: string;
  logoUrl?: string | null;
  items: CatalogFilterItem[];
};

export const mapContractorsToSections = (
  contractors: {
    title: string
    logoUrl: string | null
    subcategories: { title: string; logoUrl: string | null }[]
  }[],
): CatalogFilterSection[] =>
  contractors
    .map<CatalogFilterSection>((contractor) => ({
      id: contractor.title,
      label: contractor.title,
      logoUrl: contractor.logoUrl,
      items: [...contractor.subcategories]
        .sort((a, b) => a.title.localeCompare(b.title, "ru", { sensitivity: "base" }))
        .map((subcategory) => ({
          id: `${contractor.title}-${subcategory.title}`,
          label: subcategory.title,
          logoUrl: subcategory.logoUrl,
        })),
    }))
    .sort((a, b) => a.label.localeCompare(b.label, "ru", { sensitivity: "base" }));
