import { Heart, MockLogo } from "@/shared/ui"
import type { CompanyCardData } from "../model/types"

type CompanyCardProps = {
  item: CompanyCardData
}

export const CompanyCard = ({ item }: CompanyCardProps) => {
  return (
    <article className="rounded-[24px] bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex gap-4">
          <div className="h-16 w-16 rounded-[16px] bg-[#F6F3EE] p-2">
            <MockLogo className="h-full w-full" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-secondary">{item.name}</h3>
            <div className="flex items-center gap-2 text-sm text-accent-quinary">
              <span className="text-primary">{item.rating}</span>
              <span>·</span>
              <span>{item.reviews}</span>
            </div>
            <span className="text-sm text-accent-quinary">{item.city}</span>
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
