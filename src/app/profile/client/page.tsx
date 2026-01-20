import { ClientProfile } from '@/widgets/Profile/ClientProfile'
import { ProfileRoleGuard } from '../../providers/ProfileRoleGuard/ProfileRoleGuard'

export default function ClientProfilePage() {
    return (
        <ProfileRoleGuard role="client">
            <ClientProfile />
        </ProfileRoleGuard>
    )
}
