import { ProfileRoleGuard } from '@/app/providers/ProfileRoleGuard/ProfileRoleGuard'
import { ClientNavigationSideBar, ClientNavigationSideBarMobile } from '@/widgets/Profile/ClientProfile'

type ClientProfileLayoutProps = {
    children: React.ReactNode
}



export default function ClientProfileLayout({ children }: ClientProfileLayoutProps) {
    return (
        <ProfileRoleGuard role="client">
            <ClientNavigationSideBarMobile />
            <div className="mt-[34px] flex flex-col md:flex-row md:gap-12 lg:gap-40">
                <div className="hidden md:block">
                    <ClientNavigationSideBar />
                </div>
                <div className="flex-1 w-full px-4 md:max-w-[793px] md:px-0">
                    {children}
                </div>
            </div>
        </ProfileRoleGuard>
    )
}
