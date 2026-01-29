import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold">Админка</h1>
      <p className="text-sm text-muted-foreground">
        Выбери раздел.
      </p>

      <div className="pt-2">
        <Link className="underline" href="/admin/news">
          Перейти к новостям →
        </Link>
      </div>
    </div>
  );
}
