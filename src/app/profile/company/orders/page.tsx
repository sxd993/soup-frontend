import {
  OrdersCompanySection,
  parseCompanyOrdersPageParams,
} from "@/widgets/Profile/CompanyProfile";

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function CompanyOrdersPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const { currentPage } = parseCompanyOrdersPageParams(params);

  return <OrdersCompanySection currentPage={currentPage} />;
}
