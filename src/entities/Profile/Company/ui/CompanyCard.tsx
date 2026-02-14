"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, HeartActive, MainIcon } from "@/shared/ui"
import { useSession } from "@/entities/Session"
import { useFavoritesList, useToggleFavorite } from "@/entities/Favorites"
import { showErrorToast } from "@/shared/ui/State"
import type { CompanyCardData } from "../model/types/company.types"

type CompanyCardProps = {
  item: CompanyCardData
}

export const CompanyCard = ({ item }: CompanyCardProps) => {
  const hasLogo = Boolean(item.logoUrl)
  const companyId = Number(item.id)
  const { data: session } = useSession()
  const isLoggedIn = !!session?.user
  const { data: favorites } = useFavoritesList({ enabled: isLoggedIn })
  const toggleFavorite = useToggleFavorite()
  const isFavorite = (favorites?.companyIds ?? []).includes(companyId)

  const handleFavoriteClick = () => {
    if (!isLoggedIn) {
      showErrorToast("Войдите в аккаунт, чтобы сохранять в избранное")
      return
    }
    toggleFavorite.mutate({ companyId, isCurrentlyFavorite: isFavorite })
  }

  return (
    <article className="rounded-3xl bg-white p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-white p-2">
            {hasLogo ? (
              <Image
                src={item.logoUrl!}
                alt={item.name}
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            ) : (
              <MainIcon className="h-full w-full" />
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Link href={`/catalog/company?id=${item.id}`} className="text-lg font-semibold text-secondary">
              {item.name}
            </Link>
          </div>
        </div>
        <button
          type="button"
          onClick={handleFavoriteClick}
          disabled={toggleFavorite.isPending}
          className="flex h-10 w-10 items-center justify-center text-accent-quinary outline-none disabled:opacity-60"
          aria-label={isFavorite ? "Убрать из избранного" : "Добавить в избранное"}
        >
          {isFavorite ? <HeartActive /> : <Heart />}
        </button>
      </div>
      <p className="mt-4 text-sm text-secondary leading-[150%]">{item.description}</p>
    </article>
  )
}
