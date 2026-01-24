'use client'

import Link from 'next/link'
import { ICONS_BY_LABEL, COMPANY_NAV_LINKS } from '../const'


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
