'use client'

import { formatOrderDate, formatOrderPrice } from '../lib/order.helper'
import type { Order } from '../type/order.types'

export const useOrdersCard = (order: Order) => {
  const title = order.title?.trim() || 'Без названия'
  const region = order.region?.trim() || '—'
  const price = formatOrderPrice(order.price)
  const createdAt = formatOrderDate(order.createdAt)
  const logoUrl = order.orderLogoUrl?.trim()
  const hasLogo = Boolean(logoUrl)
  const initials = title.slice(0, 1).toUpperCase()

  return {
    title,
    region,
    price,
    createdAt,
    logoUrl,
    hasLogo,
    initials,
  }
}
