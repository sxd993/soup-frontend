import { Suspense } from "react";
import { ContestsPage, parseContestsPageSearchParams } from "@/widgets/Contests";

type ContestsPageProps = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ContestsRoute({ searchParams }: ContestsPageProps) {
    const params = await searchParams;
    const { time, status } = parseContestsPageSearchParams(params);

    return (
        <Suspense fallback={null}>
            <ContestsPage time={time} status={status} />
        </Suspense>
    );
}
