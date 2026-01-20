import Link from 'next/link'
import { COMPANY_NAV_LINKS } from '../const/companyNavLinks'

export const CompanyNavigationSideBar = () => {
    const mockMessagesCount = 1
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
        <ul className="flex flex-col gap-3">
            {links.map((link) => {
                return (
                    <li key={link.href}>
                        <Link className="flex items-center gap-2" href={link.href}>
                            <span>{link.label}</span>
                            {link.badge ? (
                                <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-lime-500 px-2 text-xs text-white">
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
