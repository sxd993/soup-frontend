import { SectionTitle } from "@/shared/ui"
import { getReviewWordByCount } from "./lib/getReviewWordByCount"

type CompanyReviewsHeaderProps = {
  total: number
}

export const CompanyReviewsHeader = ({ total }: CompanyReviewsHeaderProps) => {
  return (
    <div className="flex w-full flex-row items-baseline justify-between gap-7 md:w-auto md:flex-col md:items-start md:justify-start">
      <SectionTitle
        className="font-semibold text-[28px]! leading-[110%]!"
        title="Отзывы"
      />
      <span className="text-[14px] font-normal leading-[130%] text-accent-septenary md:text-[18px] md:font-semibold md:text-secondary">
        {`${total} ${getReviewWordByCount(total)}`}
      </span>
    </div>
  )
}
