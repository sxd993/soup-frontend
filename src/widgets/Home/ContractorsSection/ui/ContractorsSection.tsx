import { SectionTitle } from "@/shared/ui"
import { ContractorsCard, getContractors, type ContractorsTypes } from "@/entities/Contractors"

export const ContractorsSection = async () => {
    const contractors: ContractorsTypes[] = await getContractors()

    return (
        <section className="space-y-6">
            <div className="mt-25 mb-10">
                <SectionTitle title="Подрядчики" />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {contractors.map((contractor) => (
                    <ContractorsCard key={contractor.title} contractor={contractor} />
                ))}
            </div>
        </section>
    )
}