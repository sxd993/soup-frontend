import { SectionTitle } from "@/shared/ui"
import { CONTRACTORS, ContractorsCard } from "@/entities/Contractors"

export const ContractorsSection = () => {
    return (
        <section className="space-y-6">
            <div className="mt-25 mb-10">
                <SectionTitle title="Подрядчики" />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {CONTRACTORS.map((contractor) => (
                    <ContractorsCard key={contractor.title} contractor={contractor} />
                ))}
            </div>
        </section>
    )
}