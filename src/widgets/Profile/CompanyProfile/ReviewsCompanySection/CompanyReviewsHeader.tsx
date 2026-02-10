type CompanyReviewsHeaderProps = {
  total: number
  isLoading: boolean
}

export const CompanyReviewsHeader = ({ total, isLoading }: CompanyReviewsHeaderProps) => {
  return (
    <div className="flex w-full flex-row items-baseline justify-between gap-7 md:w-auto md:flex-col md:items-start md:justify-start">
      <h2 className="text-[28px] font-semibold leading-[110%] text-secondary">
        Отзывы
      </h2>
      <span className="text-[14px] font-normal leading-[130%] text-accent-septenary md:text-[18px] md:font-semibold md:text-secondary">
        {isLoading ? "Загрузка..." : `${total} отзывов`}
      </span>
    </div>
  )
}
