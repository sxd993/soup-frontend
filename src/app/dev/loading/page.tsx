import { LoadingState } from "@/shared/ui";

export default function DevLoadingPage() {
    return (
        <main className="flex min-h-[80vh] items-center justify-center p-8">
            <LoadingState />
        </main>
    );
}
