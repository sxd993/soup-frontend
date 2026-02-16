import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export function createCompanyClickHandler(
  companyId: number | undefined,
  router: AppRouterInstance
): ((e: React.MouseEvent) => void) | undefined {
  if (!companyId) return undefined

  return (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    router.push(`/catalog/company?id=${companyId}`)
  }
}
