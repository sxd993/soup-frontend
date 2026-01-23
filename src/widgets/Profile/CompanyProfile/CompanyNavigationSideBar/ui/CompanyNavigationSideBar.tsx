'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import { COMPANY_NAV_LINKS } from '../const/companyNavLinks'
import { AdvertisingIcon } from '@/shared/ui/CompanyAccount/icons/ProfileIcons/AdvertisingIcon'
import { BlogIcon } from '@/shared/ui/CompanyAccount/icons/ProfileIcons/BlogIcon'
import { FavoritesIcon } from '@/shared/ui/CompanyAccount/icons/ProfileIcons/FavoritesIcon'
import { MessagesIcon } from '@/shared/ui/CompanyAccount/icons/ProfileIcons/MessagesIcon'
import { OrdersIcon } from '@/shared/ui/CompanyAccount/icons/ProfileIcons/OrdersIcon'
import { ProfileIcon } from '@/shared/ui/CompanyAccount/icons/ProfileIcons/ProfileIcon'
import { ReviewsIcon } from '@/shared/ui/CompanyAccount/icons/ProfileIcons/ReviewsIcon'
import { ServicesIcon } from '@/shared/ui/CompanyAccount/icons/ProfileIcons/ServicesIcon'
import { SettingsIcon } from '@/shared/ui/CompanyAccount/icons/ProfileIcons/SettingsIcon'

const ICONS_BY_LABEL: Record<string, ReactNode> = {
    'Профиль': <ProfileIcon className="h-8 w-8" />,
    'Услуги': <ServicesIcon className="h-8 w-8" />,
    'Отзывы': <ReviewsIcon className="h-8 w-8" />,
    'Блог': <BlogIcon className="h-8 w-8" />,
    'Заказы': <OrdersIcon className="h-8 w-8" />,
    'Сообщения': <MessagesIcon className="h-8 w-8" />,
    'Избранное': <FavoritesIcon className="h-8 w-8" />,
    'Реклама': <AdvertisingIcon className="h-8 w-8" />,
    'Настройки': <SettingsIcon className="h-8 w-8" />,
}

type CompanyNavigationSideBarProps = {
    onNavigate?: () => void
}

export const CompanyNavigationSideBar = ({ onNavigate }: CompanyNavigationSideBarProps) => {
    const mockMessagesCount = 0
    const links = COMPANY_NAV_LINKS.map((link) => {
        if (link.href !== '/profile/company/messages') {
            return link
        }

        if (mockMessagesCount <= 0) {
            return link
        }

        return { ...link, badge: mockMessagesCount }
    })

    return (
        <ul className="flex flex-col gap-2">
            {links.map((link) => {
                const icon = ICONS_BY_LABEL[link.label]

                return (
                    <li key={link.href}>
                        <Link
                            className="group flex h-12 items-center gap-3 rounded-full px-3 transition-colors hover:bg-white"
                            href={link.href}
                            onClick={onNavigate}
                        >
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-white transition-colors group-hover:bg-[#EBE7DF] group-hover:text-[#EBE7DF]">
                                {icon}
                            </span>
                            <span className="text-[16px] font-semibold leading-[140%] text-secondary">
                                {link.label}
                            </span>
                            {link.badge ? (
                                <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-lime-500 px-2 text-xs text-white">
                                    {link.badge}
                                </span>
                            ) : null}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}
