import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Блоги",
    description: "Студия уникальных проектов",
};

export default function BlogsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}