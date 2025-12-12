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
                <div className="relative w-[68%] min-h-[780px] overflow-hidden rounded-[40px] group">
                    <Image
                        src={first.image}
                        alt="News"
                        fill
                        className="object-cover hover:scale-107 transition-all duration-300 ease-in-out"
                        placeholder="blur"
                        blurDataURL={fallbackImage}
                    />

                    {/* Оверлей */}
                    <div className="absolute bottom-5 left-5 right-5 max-w-[367px]">
                        <div className="flex flex-col gap-5">
                            <span className="w-fit px-4 py-1 text-[11px] font-medium bg-background hover:bg-accent-quaternary transition-all duration-300 text-secondary rounded-full border border-accent-quaternary">
                                {first.badge}
                            </span>

                            <div className="rounded-[20px] bg-white p-5 pb-15 shadow-sm fade-out-in">
                                <h3 className="lg:text-[22px] text-xl font-bold leading-snug text-accent-secondary">
                                    {first.title}
                                </h3>
                                <p className="mt-2 text-[16px] font-medium text-secondary">
                                    {first.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Правая колонка */}
                <div className="grid">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 content-between">
                        {rest.map((item, index) => (
                            <NewsCard
                                key={item.id}
                                item={item}
                                fallbackImage={fallbackImage}
                                withZoom={index === 0}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
