import { useMemo } from 'react'
import type { User } from '@/entities/Session'
import { HEADER_LINKS, type HeaderLink } from '../const'

export const useHeaderLinks = (role?: User['role']) => {
  return useMemo<HeaderLink[]>(() => {
    return HEADER_LINKS.map((link) => {
      if (link.href !== '/order/create') {
        return link
      }

      const isCompany = role === 'company'
      const label = isCompany ? 'Найти заказ' : 'Разместить заказ'
      const href = isCompany ? '/order/find' : '/order/create'

      return { ...link, label, href }
    })
  }, [role])
}