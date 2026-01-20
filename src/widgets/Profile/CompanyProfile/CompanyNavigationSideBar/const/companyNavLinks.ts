type CompanyNavLink = {
    label: string
    href: string
    badge?: number
}

export const COMPANY_NAV_LINKS: CompanyNavLink[] = [
    { label: 'Профиль', href: '/profile/company' },
    { label: 'Услуги', href: '/profile/company/services' },
    { label: 'Отзывы', href: '/profile/company/reviews' },
    { label: 'Блог', href: '/profile/company/blog' },
    { label: 'Заказы', href: '/profile/company/orders' },
    { label: 'Сообщения', href: '/profile/company/messages' },
    { label: 'Избранное', href: '/profile/company/favorites' },
    { label: 'Реклама', href: '/profile/company/ads' },
    { label: 'Настройки', href: '/profile/company/settings' },
]
