import type { CompanyPhone, CompanyProfileResponse } from "@/entities/Profile/Company/model/types/company.types"
import type { CompanyAccountFormValues } from "../types/CompanyAccountFormValues.types"

export const normalizeRegions = (regions?: CompanyProfileResponse["regions"]): string[] => {
    if (!regions) return []
    if (Array.isArray(regions)) return regions
    return [regions]
}

export const mapCompanyToFormValues = (company?: CompanyProfileResponse): CompanyAccountFormValues => {
    const socialLinks = company?.social_links
    const phones: CompanyAccountFormValues["contacts"]["phones"] = Array.isArray(company?.phones)
        ? (company?.phones as CompanyPhone[]).map((item) => {
            if (typeof item === "string") {
                return { phone: item, representativeName: company?.representativeName ?? "" }
            }
            return {
                phone: item.phone ?? "",
                representativeName: item.representativeName ?? "",
            }
        })
        : []
    const emails =
        Array.isArray(company?.emails)
            ? company?.emails
                .filter((value): value is string => typeof value === "string")
                .slice(0, 2)
            : company?.email
                ? [company?.email]
                : []
    return {
        profile: {
            logo: company?.logo_url ?? null,
            name: company?.name ?? "",
            description: company?.description ?? "",
            regions: normalizeRegions(company?.regions),
            address: company?.address ?? "",
        },
        contacts: {
            phones,
            emails,
        },
        socials: {
            website: socialLinks?.website ?? "",
            vk: socialLinks?.vk ?? "",
            youtube: socialLinks?.youtube ?? "",
            whatsapp: socialLinks?.whatsapp ?? "",
            telegram: socialLinks?.telegram ?? "",
            yandexDzen: socialLinks?.yandexDzen ?? "",
        },
    }
}
