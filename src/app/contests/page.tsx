import { SectionTitle, Button, TimeFilter } from "@/shared";
import { ContestSearchInput, ContestsList } from "@/widgets/Contests";

export default function ContestsPage() {

    return (
        <div className="flex flex-col mt-15">

            {/* Заголовок секции */}
            <SectionTitle title="Конкурсы" />

            {/* md+ Секция поиска */}
            <div className="flex items-center gap-4 md:mt-4">
                <div className="flex-1 hidden md:block">
                    <ContestSearchInput />
                </div>
                <Button text="Найти" className="hidden md:block" />
            </div>

            {/* Фильтр по дате */}
            <div className="flex justify-end mb-5 mt-7 md:mt-10">
                <TimeFilter />
            </div>

            {/* Список конкурсов */}
            <ContestsList />
        </div>
    )
}