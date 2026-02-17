"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { formatDate } from "@/shared/lib";
import { BlogLikeButton } from "@/features/LikeBlog";
import { createCompanyClickHandler } from "../model/lib/navigateToCompany";
import type { Blog } from "../model/types/blogs.types";

// Большая карточка блога
type TopBlogCardProps = {
  blog: Blog;
  href: string;
  className?: string;
  showLikes?: boolean;
};

export const TopBlogCard = ({
  blog,
  href,
  className,
  showLikes = false,
}: TopBlogCardProps) => {
  const date = formatDate(blog.createdAt);
  const router = useRouter();
  const handleCompanyClick = createCompanyClickHandler(blog.companyId, router);

  return (
    <div
      className={`group flex flex-col lg:flex-row gap-5 items-center md:items-stretch ${className}`}
    >
      <Link href={href} className="contents">
        {blog.imageUrl && (
          <div className="w-full flex justify-center md:w-auto overflow-hidden rounded-[40px] h-[400px]">
            <Image
              width={797}
              height={400}
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <article className="flex-1 rounded-2xl flex flex-col justify-start gap-4">
          <div className="flex items-center justify-between">
            {blog.companyId ? (
              <div
                onClick={handleCompanyClick}
                className="flex items-center gap-2 cursor-pointer"
              >
                {blog.company?.logo_url && (
                  <img
                    src={blog.company.logo_url}
                    alt=""
                    className="w-10 h-10 rounded-[10px] object-cover"
                  />
                )}
                <div className="flex flex-col justify-between min-w-0 flex-1">
                  <h4 className="font-semibold text-base text-secondary break-words whitespace-normal">
                    {blog.company?.name}
                  </h4>
                  <span className="text-sm text-accent-quinary">{date}</span>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                {blog.company?.logo_url && (
                  <img
                    src={blog.company.logo_url}
                    alt=""
                    className="w-10 h-10 rounded-[10px] object-cover"
                  />
                )}
                <div className="flex flex-col justify-between min-w-0 flex-1">
                  <h4 className="font-semibold text-base text-secondary break-words whitespace-normal">
                    {blog.company?.name}
                  </h4>
                  <span className="text-sm text-accent-quinary">{date}</span>
                </div>
              </div>
            )}
          </div>

          <h3 className="text-[22px] font-bold text-secondary leading-[105%] break-words w-full min-w-0 whitespace-normal">
            {blog.title}
          </h3>
          <p className="text-[16px] font-semibold leading-[140%] text-secondary break-words w-full min-w-0 whitespace-normal">
            {blog.description}
          </p>
          {showLikes && blog.status === "published" && (
            <div className="flex justify-start mt-2">
              <BlogLikeButton blogId={blog.id} />
            </div>
          )}
        </article>
      </Link>
    </div>
  );
};
