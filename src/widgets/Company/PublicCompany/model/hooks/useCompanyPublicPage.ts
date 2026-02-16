import { useEffect, useMemo, useState, type ComponentType } from "react"
import { useQuery } from "@tanstack/react-query"
import { getCompanyPublic } from "@/entities/Profile/Company/model/api/getCompanyPublic"
import { getCompanyBlogs } from "@/entities/Blogs"
import type { CompanyPublicResponse } from "@/entities/Profile/Company/model/types/company-public.types"
import { ICONS_BY_LABEL } from "@/shared/config/catalogServiceIcons"

export const useCompanyPublicPage = (companyId: string) => {
  const [isRegionsExpanded, setIsRegionsExpanded] = useState(false)
  const { data, isLoading, isError } = useQuery<CompanyPublicResponse>({
    queryKey: ["company-public", companyId],
    queryFn: () => getCompanyPublic(companyId),
    enabled: Boolean(companyId),
    staleTime: 3 * 60 * 1000,
  })
  const { data: blogs = [], isLoading: isBlogsLoading, isError: isBlogsError } = useQuery({
    queryKey: ["company-blogs-public", companyId],
    queryFn: () => getCompanyBlogs(companyId),
    enabled: Boolean(companyId),
    staleTime: 3 * 60 * 1000,
  })

  const company = data?.company
  const services = data?.services ?? []
  const [openSectionIds, setOpenSectionIds] = useState<Set<string>>(new Set())

  const visibleRegions = useMemo(() => {
    const list = company?.regions ?? []
    return isRegionsExpanded ? list : list.slice(0, 3)
  }, [isRegionsExpanded, company?.regions])

  const canShowAllRegions = (company?.regions?.length ?? 0) > 3

  const toggleRegions = () => setIsRegionsExpanded((prev) => !prev)

  const toggleSection = (sectionId: string) => {
    setOpenSectionIds((prev) => {
      const next = new Set(prev)
      if (next.has(sectionId)) {
        next.delete(sectionId)
      } else {
        next.add(sectionId)
      }
      return next
    })
  }

  const iconMap = ICONS_BY_LABEL as Record<string, ComponentType<{ isActive?: boolean }>>

  const contactsData = useMemo(() => {
    if (!company) {
      return {
        phones: [] as { label: string; href: string }[],
        emails: [] as { label: string; href: string }[],
        website: null as { label: string; href: string } | null,
        socials: [] as { key: string; href: string }[],
        address: "",
      }
    }

    const phones = (Array.isArray(company.phones) ? company.phones : [])
      .map((item) => item?.phone?.trim())
      .filter((value): value is string => Boolean(value))
      .map((phone) => ({ label: phone, href: `tel:${phone.replace(/\\s+/g, "")}` }))

    const emailsList = new Set<string>()
    const emails = (Array.isArray(company.emails) ? company.emails : [])
      .map((email) => email?.trim())
      .filter((value): value is string => Boolean(value))
    emails.forEach((email) => emailsList.add(email))
    if (company.email?.trim()) {
      emailsList.add(company.email.trim())
    }
    const dedupedEmails = Array.from(emailsList).map((email) => ({
      label: email,
      href: `mailto:${email}`,
    }))

    const socialLinks = company.socialLinks ?? {}
    const normalizedWebsite = socialLinks.website?.trim()
    const websiteHref = normalizedWebsite
      ? /^https?:\/\//i.test(normalizedWebsite)
        ? normalizedWebsite
        : `https://${normalizedWebsite}`
      : ""

    const socials: { key: string; href: string }[] = []
    if (socialLinks.telegram) socials.push({ key: "telegram", href: socialLinks.telegram })
    if (socialLinks.whatsapp) socials.push({ key: "whatsapp", href: socialLinks.whatsapp })
    if (socialLinks.vk) socials.push({ key: "vk", href: socialLinks.vk })
    if (socialLinks.youtube) socials.push({ key: "youtube", href: socialLinks.youtube })
    if (socialLinks.yandexDzen) socials.push({ key: "yandexDzen", href: socialLinks.yandexDzen })

    return {
      phones,
      emails: dedupedEmails,
      website: normalizedWebsite
        ? { label: normalizedWebsite, href: websiteHref }
        : null,
      socials,
      address: company.address ?? "",
    }
  }, [company])

  const handleCall = () => {
    const phoneHref = contactsData.phones[0]?.href
    if (!phoneHref) return
    if (typeof window !== "undefined") {
      window.location.href = phoneHref
    }
  }

  useEffect(() => {
    if (services.length === 0) return
    setOpenSectionIds((prev) => (prev.size === 0 ? new Set([services[0].category]) : prev))
  }, [services])

  return {
    company,
    isLoading,
    isError,
    regions: visibleRegions,
    canShowAllRegions,
    isRegionsExpanded,
    toggleRegions,
    services,
    openSectionIds,
    toggleSection,
    iconMap,
    contactsData,
    blogs,
    isBlogsLoading,
    isBlogsError,
    handleCall,
  }
}
