"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PinnedIcon } from "@/shared/ui";
import { BlogLikeButton } from "@/features/LikeBlog";
import { useBottomBlogCard } from "../model/hooks/useBottomBlogCard";
import { createCompanyClickHandler } from "../model/lib/navigateToCompany";
import type { Blog } from "../model/types/blogs.types";

type BottomBlogCardProps = {
  blog: Blog;
  href?: string;
  className?: string;
  imageHeight?: number | null;
  headerActions?: React.ReactNode;
  showPinnedIcon?: boolean;
  showLikes?: boolean;
};

export const BottomBlogCard = ({
  blog,
  href,
  className,
  imageHeight = 400,
  headerActions,
  showPinnedIcon = false,
  showLikes = false,
}: BottomBlogCardProps) => {
  const router = useRouter();
  const {
    date,
    articleClasses,
    imageHeight: height,
  } = useBottomBlogCard(blog, {
    className,
    imageHeight,
  });

  const handleCompanyClick = createCompanyClickHandler(blog.companyId, router);

  const headerContent = (
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
          <div className="flex flex-col justify-between">
            <h4 className="font-semibold text-base text-secondary">
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
          <div className="flex flex-col justify-between">
            <h4 className="font-semibold text-base text-secondary">
              {blog.company?.name}
            </h4>
            <span className="text-sm text-accent-quinary">{date}</span>
          </div>
        </div>
      )}
      <div className="flex items-center gap-2">
        {showPinnedIcon && blog.pinnedByCompany && (
          <PinnedIcon className="w-7 h-7 shrink-0" />
        )}
        {headerActions}
      </div>
    </div>
  );

  const content = (
    <>
      {blog.imageUrl && (
        <div
          className="overflow-hidden rounded-[20px]"
          style={{ height: height !== null ? `${height}px` : "400px" }}
        >
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            width={387}
            height={height ?? 400}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <h3 className="text-[22px] font-bold text-secondary leading-[105%]">
        {blog.title}
      </h3>
      <p className="text-[16px] font-semibold leading-[140%] text-secondary">
        {blog.description}
      </p>
      {showLikes && blog.status === "published" && (
        <div className="flex justify-start mt-2">
          <BlogLikeButton blogId={blog.id} />
        </div>
      )}
    </>
  );

  return (
    <article className={`group ${articleClasses}`}>
      {headerContent}
      {href ? (
        <Link href={href} className="contents">
          {content}
        </Link>
      ) : (
        content
      )}
    </article>
  );
};
