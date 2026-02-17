import { CompanyOrderResponseDetailSection } from "@/widgets/Profile/CompanyProfile";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function CompanyOrderResponsePage({ params }: PageProps) {
  const { id } = await params;

  return <CompanyOrderResponseDetailSection orderId={id} />;
}
