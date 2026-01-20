import { CompanyNavigationSideBar } from '@/widgets/Profile/CompanyProfile'
import { ProfileRoleGuard } from '@/app/providers/ProfileRoleGuard/ProfileRoleGuard'

type CompanyProfileLayoutProps = {
    children: React.ReactNode
}

export default function CompanyProfileLayout({ children }: CompanyProfileLayoutProps) {
    return (
        <ProfileRoleGuard role="company">
            <div className="flex justify-between">
                <div>
                    <CompanyNavigationSideBar />
                </div>
                <div>{children}</div>
            </div>
        </ProfileRoleGuard>
    )
}
