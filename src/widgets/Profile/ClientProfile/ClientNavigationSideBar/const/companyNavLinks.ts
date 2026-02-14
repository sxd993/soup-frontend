type ClientNavLink = {
    label: string
    href: string
    badge?: number
}

export const CLIENT_NAV_LINKS: ClientNavLink[] = [
    { label: 'Профиль', href: '/profile/client/account' },
    { label: 'Мои заказы', href: '/profile/client/orders' },
    { label: 'Избранное', href: '/profile/client/favorites' },
    { label: 'Уведомления', href: '/profile/client/notifications' },
]
