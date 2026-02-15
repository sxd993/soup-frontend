export type CatalogFilterItem = {
  id: string;
  label: string;
  isSelected?: boolean;
};

export type CatalogFilterSection = {
  id: string;
  label: string;
  items: CatalogFilterItem[];
};

export const mapContractorsToSections = (
  contractors: { title: string; badges: string[] }[],
): CatalogFilterSection[] =>
  contractors
    .map<CatalogFilterSection>((contractor) => ({
      id: contractor.title,
      label: contractor.title,
      items: [...contractor.badges]
        .sort((a, b) => a.localeCompare(b, "ru", { sensitivity: "base" }))
        .map((badge) => ({
          id: `${contractor.title}-${badge}`,
          label: badge,
        })),
    }))
    .sort((a, b) => a.label.localeCompare(b.label, "ru", { sensitivity: "base" }));
