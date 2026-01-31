"use client"

import { useQuery } from "@tanstack/react-query"
import { getCompanyBlogs } from "../../api/getCompanyBlogs"
import type { CompanyBlogStatus } from "../types/company-blog.types"

export const useCompanyBlogs = (status: CompanyBlogStatus) => {
  return useQuery({
    queryKey: ["company-blogs", status],
    queryFn: () => getCompanyBlogs(status),
    staleTime: 60 * 1000,
  })
}