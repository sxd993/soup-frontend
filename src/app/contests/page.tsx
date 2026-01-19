import { SectionTitle, Button } from "@/shared/ui";
import { TimeFilter } from "@/features/TimeFilter";
import { ContestSearchInput, ContestsList } from "@/widgets/Contests";

type PageProps = {
    searchParams: Promise<{ page?: string }>
}

export default async function ContestsPage({ searchParams }: PageProps) {
    const { page } = await searchParams
    const currentPage = Number(page) || 1

    return (
        <div className="flex flex-col mt-15">

            {/* Заголовок секции */}
            <SectionTitle title="Конкурсы" />

            {/* md+ Секция поиска */}
            <div className="flex items-center gap-4 md:mt-4">
                <div className="flex-1 hidden md:block">
                    <ContestSearchInput />
                </div>
                <Button className="hidden md:block">
                    Найти
                </Button>
            </div>

            {/* Фильтр по дате */}
            <div className="flex justify-end mb-5 mt-7 md:mt-10">
                <TimeFilter />
            </div>

            {/* Список конкурсов */}
            <ContestsList currentPage={currentPage} />
        </div>
    )
}