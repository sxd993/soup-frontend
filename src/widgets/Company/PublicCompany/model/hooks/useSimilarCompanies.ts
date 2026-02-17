import { useQuery } from "@tanstack/react-query"
import { getCatalogCompanies } from "@/entities/Profile/Company/model/api/getCatalogCompanies"
import type { CompanyServiceCategory } from "@/entities/Profile/Company/model/types/company-services.types"
import type { CompanyCardData } from "@/entities/Profile/Company/model/types/company.types"

function buildFiltersFromServices(services: CompanyServiceCategory[]): { category: string; service: string }[] {
  const seen = new Set<string>()
  const filters: { category: string; service: string }[] = []
  for (const cat of services) {
    const category = cat.category?.trim() ?? ""
    for (const item of cat.services ?? []) {
      const service = item.subcategory?.trim() ?? ""
      if (!category || !service) continue
      const key = `${category}||${service}`
      if (seen.has(key)) continue
      seen.add(key)
      filters.push({ category, service })
    }
  }
  return filters
}

function shuffleAndTake<T>(array: T[], count: number): T[] {
  const copy = [...array]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy.slice(0, count)
}

export function useSimilarCompanies(companyId: string, services: CompanyServiceCategory[]) {
  const filters = buildFiltersFromServices(services)
  const hasFilters = filters.length > 0

  const query = useQuery({
    queryKey: ["similar-companies", companyId, filters.map((f) => `${f.category}||${f.service}`).sort().join(",")],
    queryFn: async (): Promise<CompanyCardData[]> => {
      const list = await getCatalogCompanies(filters, [])
      const withoutCurrent = list.filter((c) => c.id !== companyId)
      return shuffleAndTake(withoutCurrent, 5)
    },
    enabled: Boolean(companyId) && hasFilters,
    staleTime: 5 * 60 * 1000,
  })

  return {
    similarCompanies: query.data ?? [],
    isLoading: query.isLoading,
    isError: query.isError,
  }
}
