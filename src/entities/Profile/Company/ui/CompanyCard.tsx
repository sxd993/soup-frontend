"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, HeartActive, MainIcon } from "@/shared/ui"
import { getReviewWordByCount } from "@/shared/lib"
import { useSession } from "@/entities/Session"
import { useFavoritesList, useToggleFavorite } from "@/entities/Favorites"
import { showErrorToast } from "@/shared/ui/State"
import type { CompanyCardData } from "../model/types/company.types"

const StarIcon = ({ fill }: { fill: string }) => (
  <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path
      d="M5.05676 0.69121C5.35611 -0.230101 6.65952 -0.2301 6.95887 0.691211L7.69167 2.94653C7.82554 3.35856 8.2095 3.63752 8.64272 3.63752L11.0141 3.63752C11.9828 3.63752 12.3856 4.87713 11.6019 5.44653L9.6834 6.8404C9.33292 7.09504 9.18626 7.54641 9.32013 7.95843L10.0529 10.2138C10.3523 11.1351 9.2978 11.9012 8.51409 11.3318L6.5956 9.93792C6.24511 9.68328 5.77051 9.68328 5.42003 9.93792L3.50154 11.3318C2.71782 11.9012 1.66334 11.1351 1.96269 10.2138L2.69549 7.95843C2.82937 7.54641 2.68271 7.09504 2.33222 6.8404L0.413729 5.44653C-0.369984 4.87713 0.0327914 3.63752 1.00151 3.63752L3.3729 3.63752C3.80613 3.63752 4.19008 3.35856 4.32396 2.94653L5.05676 0.69121Z"
      fill={fill}
    />
  </svg>
)

type CompanyCardProps = {
  item: CompanyCardData
  /** Вариант для каталога (полная карточка) или избранного (только лого, название, описание 5 строк) */
  variant?: "catalog" | "favorites"
}

export const CompanyCard = ({ item, variant = "catalog" }: CompanyCardProps) => {
  const hasLogo = Boolean(item.logoUrl)
  const companyId = Number(item.id)
  const rating = item.rating ?? 0
  const reviewsCount = item.reviewsCount ?? 0
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

  const companyHref = `/catalog/company?id=${item.id}`

  if (variant === "favorites") {
    return (
      <article className="relative flex flex-col rounded-3xl bg-white p-4 md:p-6">
        <Link
          href={companyHref}
          className="absolute inset-0 z-0 rounded-3xl"
          aria-label={`Перейти на страницу компании ${item.name}`}
        />
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            toggleFavorite.mutate({ companyId, isCurrentlyFavorite: true })
          }}
          disabled={toggleFavorite.isPending}
          className="pointer-events-auto absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center text-accent-quinary outline-none disabled:opacity-60 [&_svg]:h-7 [&_svg]:w-7 md:right-6 md:top-6 md:h-10 md:w-10 md:[&_svg]:h-6 md:[&_svg]:w-6"
          aria-label="Убрать из избранного"
        >
          <HeartActive />
        </button>
        <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center text-center pointer-events-none lg:items-stretch lg:text-left">
          <div className="flex w-full min-h-0 flex-1 flex-col lg:flex-row lg:gap-4 lg:pr-14">
            <div className="relative mx-auto h-48 w-48 shrink-0 overflow-hidden rounded-[10px] bg-white p-1.5 md:h-32 md:w-32 md:p-2 lg:mx-0 lg:h-24 lg:w-24">
              {hasLogo ? (
                <Image
                  src={item.logoUrl!}
                  alt={item.name}
                  width={192}
                  height={192}
                  className="h-full w-full object-cover overflow-hidden rounded-[10px]"
                />
              ) : (
                <MainIcon className="h-full w-full" />
              )}
            </div>
            <span className="mt-3 min-w-0 flex-1 break-words text-lg font-semibold leading-tight text-secondary md:text-[18px] lg:mt-0 lg:text-[20px] xl:text-[22px]">
              {item.name}
            </span>
          </div>
          <p className="mt-auto pt-3 line-clamp-5 text-xs text-secondary leading-[150%] md:text-sm md:pt-4">
            {item.description}
          </p>
        </div>
      </article>
    )
  }

  return (
    <article className="relative flex h-[240px] flex-col rounded-3xl bg-white p-6 md:h-[250px]">
      <Link
        href={companyHref}
        className="absolute inset-0 z-0 rounded-3xl"
        aria-label={`Перейти на страницу компании ${item.name}`}
      />
      <div className="relative z-10 flex min-h-0 flex-1 flex-col pointer-events-none">
        <div className="flex shrink-0 flex-row items-start justify-between gap-3">
          <div className="flex min-w-0 flex-1 gap-3 sm:gap-4">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[10px] bg-white p-1.5 md:h-32 md:w-32 md:p-2">
              {hasLogo ? (
                <Image
                  src={item.logoUrl!}
                  alt={item.name}
                  width={128}
                  height={128}
                  className="h-full w-full object-cover overflow-hidden rounded-[10px]"
                />
              ) : (
                <MainIcon className="h-full w-full" />
              )}
            </div>
            <div className="flex min-h-20 min-w-0 flex-1 flex-col md:min-h-0 md:gap-2">
              <span className="text-[22px] font-semibold leading-tight text-secondary">
                {item.name}
              </span>
              <div className="mt-auto flex flex-col gap-1 md:mt-0">
                <div className="flex items-center gap-2">
                  <span className="flex shrink-0 items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index}>
                        <StarIcon fill={rating >= index + 1 ? "#8BC652" : "#C5C2C2"} />
                      </span>
                    ))}
                  </span>
                  <span className="text-sm text-accent-quinary" aria-hidden>·</span>
                  <span className="text-sm text-accent-quinary">
                    {reviewsCount} {getReviewWordByCount(reviewsCount)}
                  </span>
                </div>
                {item.address?.trim() ? (
                  <p className="line-clamp-2 text-sm text-secondary">
                    {item.address}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={handleFavoriteClick}
            disabled={toggleFavorite.isPending}
            className="pointer-events-auto flex h-10 w-10 shrink-0 items-center justify-center text-accent-quinary outline-none disabled:opacity-60"
            aria-label={isFavorite ? "Убрать из избранного" : "Добавить в избранное"}
          >
            {isFavorite ? <HeartActive /> : <Heart />}
          </button>
        </div>
        <p className="mt-auto line-clamp-3 pt-4 text-sm text-secondary leading-[150%]">
          {item.description}
        </p>
      </div>
    </article>
  )
}
