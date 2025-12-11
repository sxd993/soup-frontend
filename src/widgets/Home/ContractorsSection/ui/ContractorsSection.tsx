import { SectionTitle } from "@/shared/ui/SectionTitle"
import { CONTRACTORS, ContractorsCard } from "@/entities"

export const ContractorsSection = () => {
    return (
        <section className="space-y-6">
            <SectionTitle title="Подрядчики" />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-3">
                {CONTRACTORS.map((contractor) => (
                    <ContractorsCard key={contractor.title} contractor={contractor} />
                ))}
            </div>
        </section>
    )
}
