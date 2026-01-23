import { CompanyNavigationSideBar } from '@/widgets/Profile/CompanyProfile'
import { CompanyNavigationSideBarMobile } from '@/widgets/Profile/CompanyProfile/CompanyNavigationSideBar/ui/CompanyNavigationSideBarMobile'
import { ProfileRoleGuard } from '@/app/providers/ProfileRoleGuard/ProfileRoleGuard'

type CompanyProfileLayoutProps = {
    children: React.ReactNode
}



export default function CompanyProfileLayout({ children }: CompanyProfileLayoutProps) {
    return (
        <ProfileRoleGuard role="company">
            <CompanyNavigationSideBarMobile />
            <div className="mt-[34px] flex flex-col md:flex-row md:gap-12 lg:gap-40">
                <div className="hidden md:block">
                    <CompanyNavigationSideBar />
                </div>
                <div className="flex-1">
                    {children}
                </div>
            </div>
        </ProfileRoleGuard>
    )
}
