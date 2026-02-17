"use client"

import { CompanyCard } from "@/entities/Profile/Company"
import { SectionTitle } from "@/shared/ui"
import { useFavoritesList, useFavoriteCompanies } from "@/entities/Favorites"
import { useSession } from "@/entities/Session"
import { StateProvider } from "@/app/providers/State/StateProvider"

export function FavoritesContent() {
  const { data: session } = useSession()
  const isLoggedIn = !!session?.user
  const { data: favorites, isLoading: isListLoading, isError: isListError } = useFavoritesList({
    enabled: isLoggedIn,
  })
  const companyIds = favorites?.companyIds ?? []
  const {
    data: companies,
    isLoading: isCompaniesLoading,
    isError: isCompaniesError,
  } = useFavoriteCompanies(companyIds)

  const isLoading = isListLoading || (companyIds.length > 0 && isCompaniesLoading)
  const isError = isListError || isCompaniesError
  const isEmpty = !isLoading && !isError && (companyIds.length === 0 || (companies?.length ?? 0) === 0)

  return (
    <section className="flex flex-col gap-6">
      <SectionTitle
        className="font-semibold text-[28px]! leading-[110%]!"
        title="Избранные компании"
      />
      <StateProvider
        isLoading={isLoading}
        isError={isError}
        isEmpty={isEmpty}
        errorTitle="Не удалось загрузить избранное"
      >
        <div className="grid grid-cols-2 gap-5">
          {(companies ?? []).map((item) => (
            <CompanyCard key={item.id} item={item} variant="favorites" />
          ))}
        </div>
      </StateProvider>
    </section>
  )
}
