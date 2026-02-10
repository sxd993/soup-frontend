import Image from "next/image"
import { Button, Heart, MockLogo } from "@/shared/ui"

type CompanyHeaderProps = {
  name: string
  description: string
  logoUrl: string | null
  regions: string[]
  canShowAllRegions: boolean
  isRegionsExpanded: boolean
  onToggleRegions: () => void
  onCall: () => void
  canCall: boolean
}

export const CompanyHeader = ({
  name,
  description,
  logoUrl,
  regions,
  canShowAllRegions,
  isRegionsExpanded,
  onToggleRegions,
  onCall,
  canCall,
}: CompanyHeaderProps) => {
  return (
    <div className="rounded-[30px] bg-white p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="flex gap-4">
          <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-[#F6F3EE] p-2">
            {logoUrl ? (
              <Image
                src={logoUrl}
                alt={name}
                width={80}
                height={80}
                className="h-full w-full object-cover"
              />
            ) : (
              <MockLogo className="h-full w-full" />
            )}
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold text-secondary md:text-[28px]">{name}</h1>
            <p className="text-sm text-accent-quinary">
              {regions[0] ?? "Регион не указан"}
            </p>
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

      <p className="mt-4 text-sm text-secondary leading-[150%]">{description}</p>

      <div className="mt-5">
        <p className="text-[18px] font-semibold text-secondary">Работаем в регионах:</p>
        <p className="mt-2 text-sm text-secondary">
          {regions.length > 0 ? regions.join(", ") : "Регион не указан"}
        </p>
        {canShowAllRegions ? (
          <button
            type="button"
            onClick={onToggleRegions}
            className="mt-2 text-sm text-accent-quinary"
          >
            {isRegionsExpanded ? "Скрыть" : "Показать все"}
          </button>
        ) : null}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          className="flex h-12 w-full items-center justify-center rounded-full !bg-[#8BC652] !text-accent-senary hover:!bg-[#7DAF4D] active:!bg-[#80D62C] disabled:!bg-[#D3EBBB] sm:w-[180px]"
          onClick={onCall}
          disabled={!canCall}
        >
          Позвонить
        </Button>
        <Button
          className="flex h-12 w-full items-center justify-center whitespace-nowrap rounded-full !bg-[#535353] !text-white hover:!bg-[#2F2F2F] active:!bg-[#201F1F] disabled:!bg-[#C5C2C2] sm:w-[260px]"
        >
          Предложить заказ
        </Button>
      </div>
    </div>
  )
}
