import type { ReactNode } from "react";
import Link from "next/link";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <div className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="font-semibold">Admin</div>

          <nav className="flex gap-4 text-sm">
            <Link className="hover:underline" href="/admin/news">
              Новости
            </Link>
          </nav>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
    </div>
  );
}
