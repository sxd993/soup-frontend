import { SectionTitle, ViewAllButton } from "@/shared/ui"
import Image from 'next/image';


export const InterestingSection = () => {
    return (
        <section className="min-h-[397px]">
            {/* Шапка секции*/}
            <div className="flex items-center justify-between mt-25 mb-10">
                <SectionTitle title="Интересное в блогах" />
                <ViewAllButton href="/contests" text="Все блоги" />
            </div>
            {/* Основной контент секции*/}
            <div>
                {/* Выделенный блог*/}
                <div className="flex gap-5">
                    {/* Изображение */}
                    <Image
                        width={797}
                        height={500}
                        src={'https://s3.twcstorage.ru/4b615622-soup/blogs/Shapka.svg'} alt="Shapka"
                    />
                    {/* Карточка блога */}
                    <div className="flex-1">
                        {/* Контейнер карточки */}
                        <div className="flex flex-col w-full h-full">
                            {/* Лого, Название и дата */}
                            <div className="flex">
                                <div></div>
                                <div></div>
                            </div>
                            {/* Заголовок */}
                            <div></div>
                            {/* Описание */}
                            <div></div>
                            {/* Социальные взаимодействия */}
                            <div></div>
                        </div>
                    </div>

                </div>
                {/* Нижние статьи*/}
                <div>

                </div>
            </div>
        </section>
    )
}