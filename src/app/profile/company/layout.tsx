import { CompanyNavigationSideBar } from '@/widgets/Profile/CompanyProfile'
import { ProfileRoleGuard } from '@/app/providers/ProfileRoleGuard/ProfileRoleGuard'

type CompanyProfileLayoutProps = {
    children: React.ReactNode
}



export default function CompanyProfileLayout({ children }: CompanyProfileLayoutProps) {
    return (
        <ProfileRoleGuard role="company">
            <div className="flex gap-40 mt-[34px]">
                <div>
                    <CompanyNavigationSideBar />
                </div>
                <div className='flex-1'>
                    {children}
                </div>
            </div>
        </ProfileRoleGuard>
    )
}
