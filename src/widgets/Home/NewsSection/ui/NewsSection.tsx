import { SectionTitle, ViewAllButton } from "@/shared/ui"
import { IMAGES } from "@/shared/config"
import { NEWS } from "../model/news"
import { NewsCard } from "./NewsCard"
import Image from "next/image"

export const NewsSection = () => {
    const fallbackImage = IMAGES.hero.background
    const [first, ...rest] = NEWS

    return (
        <section className="flex flex-col">
            {/* Шапка секции */}
            <div className="flex justify-between w-full mt-25 mb-10">
                <SectionTitle title="Новости" />
                <ViewAllButton href="/news" text="Смотреть все" />
            </div>

            {/* Контент */}
            <div className="flex flex-col md:flex-row gap-4.5 items-stretch">

                {/* Левая колонка */}
                <div className="relative w-[75%] min-h-[800px] overflow-hidden rounded-xl">
                    <Image
                        src={first.image}
                        alt="News"
                        fill
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL={fallbackImage}
                    />

                    {/* Оверлей */}
                    <div className="absolute bottom-10 left-5 right-5 max-w-[320px]">
                        <div className="flex flex-col gap-3">
                            <span className="w-fit px-3 py-1 text-[11px] font-semibold bg-[#EBE7DF] text-secondary rounded-full border border-accent-quaternary">
                                {first.badge}
                            </span>

                            <div className="rounded-2xl bg-white p-6 pb-15 shadow-sm">
                                <h3 className="text-[20px] font-semibold leading-snug">
                                    {first.title}
                                </h3>
                                <p className="mt-2 text-[14px] leading-relaxed text-secondary">
                                    {first.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Правая колонка */}
                <div className="grid gap-4.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 content-between">
                        {rest.map((item) => (
                            <NewsCard
                                key={item.id}
                                item={item}
                                fallbackImage={fallbackImage}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
