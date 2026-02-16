import { StateProvider } from "@/app/providers/State/StateProvider";
import type { Blog } from "@/entities/Blogs";
import { BottomBlogCard } from "@/entities/Blogs";
import { CompanyBlogSectionSkeleton } from "./CompanyBlogSectionSkeleton";

type CompanyBlogSectionProps = {
  blogs: Blog[];
  isLoading?: boolean;
  isError?: boolean;
};

export const CompanyBlogSection = ({
  blogs,
  isLoading,
  isError,
}: CompanyBlogSectionProps) => {
  return (
    <StateProvider
      isLoading={isLoading ?? false}
      isError={isError ?? false}
      isEmpty={blogs.length === 0}
      errorTitle="Не удалось загрузить публикации"
      loadingComponent={<CompanyBlogSectionSkeleton />}
    >
      <div className="w-full flex flex-col gap-5">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white p-5 rounded-[20px]">
            <BottomBlogCard
              blog={blog}
              href={`/blogs/item?id=${blog.id}`}
              imageHeight={null}
            />
          </div>
        ))}
      </div>
    </StateProvider>
  );
};
