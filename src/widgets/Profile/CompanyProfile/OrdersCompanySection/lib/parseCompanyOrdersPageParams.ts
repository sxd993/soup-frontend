function normalizePageValue(value: string | string[] | undefined): number {
  const singleValue = Array.isArray(value) ? value[0] : value;
  if (!singleValue) return 1;

  const page = Number(singleValue);
  return Number.isFinite(page) && page > 0 ? page : 1;
}

type OrdersPageParams = { [key: string]: string | string[] | undefined };

export const parseCompanyOrdersPageParams = (params: OrdersPageParams) => ({
  currentPage: normalizePageValue(params.page),
});
