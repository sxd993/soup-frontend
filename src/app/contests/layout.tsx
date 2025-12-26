import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Конкурсы",
    description: "Студия уникальных проектов",
};

export default function ContestsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}