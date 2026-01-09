import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Профиль",
    description: "Студия уникальных проектов",
};

export default function ProfilePage() {
    return (
        <div className="m-auto min-h-screen flex items-center justify-center">
            Profile Page
        </div>
    )
}
