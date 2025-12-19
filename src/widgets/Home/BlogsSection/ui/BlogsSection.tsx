import { BLOGS, TopBlogCardSection } from "@/entities"
import { BottomBlogCardSection } from "./BottomBlogCardSection"
import { SectionTitle, ViewAllButton } from "@/shared/ui/icons"

export const BlogsSection = () => {
    const topBlog = BLOGS[0];
    const bottomBlogsMd = BLOGS.slice(1, 3);
    const bottomBlogsLg = BLOGS.slice(1, 4);

    return (
        <section className="mb-15">
            {/* Хедер */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-25 mb-10">
                <SectionTitle title="Интересное в блогах" />
                <div className="hidden md:block">
                    <ViewAllButton href="/contests" text="Все блоги" />
                </div>
            </div>

            {/* Топ карточка */}
            <TopBlogCardSection firstBlog={topBlog} />

            {/* Нижние карточки */}
            <div className="mt-8 space-y-8">
                <div className="lg:hidden">
                    <BottomBlogCardSection blogs={bottomBlogsMd} />
                </div>
                <div className="hidden lg:block">
                    <BottomBlogCardSection blogs={bottomBlogsLg} />
                </div>
            </div>

            {/* Кнопка */}
            <div className="mt-6 md:hidden">
                <ViewAllButton href="/contests" text="Все блоги" />
            </div>
        </section>
    )
}
