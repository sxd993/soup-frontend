import type { Metadata } from "next";
import { ProfilePageClient } from "./ProfilePageClient";

export const metadata: Metadata = {
    title: "Профиль",
    description: "Студия уникальных проектов",
};

export default function ProfilePage() {
    return <ProfilePageClient />
}