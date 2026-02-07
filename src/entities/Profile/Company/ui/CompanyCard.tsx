import Image from "next/image"
import Link from "next/link"
import { Heart, MockLogo } from "@/shared/ui"
import type { CompanyCardData } from "../model/types/company.types"

type CompanyCardProps = {
  item: CompanyCardData
}

export const CompanyCard = ({ item }: CompanyCardProps) => {
  const hasLogo = Boolean(item.logoUrl)

  return (
    <article className="rounded-3xl bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-[#F6F3EE] p-2">
            {hasLogo ? (
              <Image
                src={item.logoUrl!}
                alt={item.name}
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="text-[10px] font-semibold text-secondary text-center leading-tight">
                Нет логотипа
              </span>
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
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E0D6] text-accent-quinary"
          aria-label="Добавить в избранное"
        >
          <Heart />
        </button>
      </div>
      <p className="mt-4 text-sm text-secondary leading-[150%]">{item.description}</p>
    </article>
  )
}
