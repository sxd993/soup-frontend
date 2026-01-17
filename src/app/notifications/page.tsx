import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Уведомления",
    description: "Студия уникальных проектов",
};

export default function NotificationsPage() {
    return (
        <div className="m-auto min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-6">
                <p className="text-lg font-semibold text-secondary">Здесь будут уведомления</p>
            </div>
        </div>
    )
}