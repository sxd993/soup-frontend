import { Suspense } from "react";
import type { Metadata } from "next";
import { NewsPage, parseNewsPageSearchParams } from "@/widgets/News";

export const metadata: Metadata = {
    title: "Новости",
    description: "Студия уникальных проектов",
};

type NewsRouteProps = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function NewsRoute({ searchParams }: NewsRouteProps) {
    const params = await searchParams;
    const { time, badge } = parseNewsPageSearchParams(params);

    return (
        <Suspense fallback={null}>
            <NewsPage time={time} badge={badge} />
        </Suspense>
    );
}
