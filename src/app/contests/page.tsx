import { Suspense } from "react";
import { LoadingState } from "@/shared/ui";
import { ContestsPage, parseContestsPageSearchParams } from "@/widgets/Contests";

type ContestsPageProps = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ContestsRoute({ searchParams }: ContestsPageProps) {
    const params = await searchParams;
    const { time, status, currentPage } = parseContestsPageSearchParams(params);

    return (
        <Suspense fallback={<LoadingState />}>
            <ContestsPage time={time} status={status} currentPage={currentPage} />
        </Suspense>
    );
}
