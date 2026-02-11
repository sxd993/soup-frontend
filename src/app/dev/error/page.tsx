import { ErrorState } from "@/shared/ui";

export default function DevErrorPage() {
    return (
        <main className="flex min-h-[80vh] items-center justify-center p-8">
            <ErrorState
                title="Ошибка загрузки"
                subTitle="Не удалось загрузить данные. Проверьте соединение и попробуйте снова."
            />
        </main>
    );
}
