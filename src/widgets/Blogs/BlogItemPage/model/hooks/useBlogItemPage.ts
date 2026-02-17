"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getBlogById, getTopLikedBlogs } from "@/entities/Blogs";
import type { Blog } from "@/entities/Blogs";
import type { SidePanelItem } from "@/shared/ui";

export type BlogSidePanelItem = SidePanelItem & { blog: Blog };

export function useBlogItemPage() {
  const searchParams = useSearchParams();
  const blogId = searchParams?.get("id") || "";
  const [blog, setBlog] = useState<Blog | null>(null);
  const [topLikedBlogs, setTopLikedBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let active = true;
    const load = async () => {
      if (!blogId) {
        setBlog(null);
        setTopLikedBlogs([]);
        setIsLoading(false);
        setIsError(false);
        return;
      }

      setIsLoading(true);
      setIsError(false);
      try {
        const [blogData, topBlogsData] = await Promise.all([
          getBlogById(blogId),
          getTopLikedBlogs(5),
        ]);
        if (!active) return;
        setBlog(blogData);
        setTopLikedBlogs(topBlogsData);
      } catch {
        if (active) setIsError(true);
      } finally {
        if (active) setIsLoading(false);
      }
    };

    void load();
    return () => {
      active = false;
    };
  }, [blogId]);

  const sidePanelItems: BlogSidePanelItem[] = useMemo(
    () =>
      topLikedBlogs
        .filter((item) => item.id !== blogId)
        .slice(0, 5)
        .map((item) => ({
          id: item.id,
          isAds: false,
          blog: item,
        })),
    [topLikedBlogs, blogId],
  );

  return {
    blog,
    isLoading,
    isError,
    isEmpty: !isLoading && !isError && !blog,
    sidePanelItems,
  };
}
