import { useQuery } from "@tanstack/react-query"
import { getCompanyPublic } from "@/entities/Profile/Company/model/api/getCompanyPublic"
import type { CompanyCardData } from "@/entities/Profile/Company/model/types/company.types"

async function fetchFavoriteCompanies(companyIds: number[]): Promise<CompanyCardData[]> {
  if (companyIds.length === 0) return []
  const results = await Promise.allSettled(
    companyIds.map((id) => getCompanyPublic(String(id))),
  )
  return results
    .filter((r): r is PromiseFulfilledResult<Awaited<ReturnType<typeof getCompanyPublic>>> => r.status === "fulfilled")
    .map((r) => ({
      id: r.value.company.id,
      name: r.value.company.name,
      description: r.value.company.description,
      logoUrl: r.value.company.logoUrl ?? null,
    }))
}

export function useFavoriteCompanies(companyIds: number[]) {
  return useQuery({
    queryKey: ["favorites", "companies", companyIds.join(",")],
    queryFn: () => fetchFavoriteCompanies(companyIds),
    enabled: companyIds.length > 0,
  })
}
