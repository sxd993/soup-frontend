"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCreateNews } from "@/features/AdminNews/createNews/useCreateNews";

export function AdminNewsCreateForm() {
  const router = useRouter();
  const { submit, loading, error } = useCreateNews();

  const [form, setForm] = useState({
    title: "",
    category: "",
    author: "",
    description: "",
    image: "",
    imageAlt: "",
    isAds: false,
    isImportantNew: false,
  });

  function update<K extends keyof typeof form>(
    key: K,
    value: typeof form[K],
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit() {
    await submit(form);
    router.push("/admin/news");
  }

  return (
    <div className="space-y-4 max-w-2xl">
      <Input
        label="Заголовок"
        value={form.title}
        onChange={(v) => update("title", v)}
      />

      <Input
        label="Категория"
        value={form.category}
        onChange={(v) => update("category", v)}
      />

      <Input
        label="Автор"
        value={form.author}
        onChange={(v) => update("author", v)}
      />

      <Input
        label="Image URL"
        value={form.image}
        onChange={(v) => update("image", v)}
      />

      <Input
        label="Image Alt"
        value={form.imageAlt}
        onChange={(v) => update("imageAlt", v)}
      />

      <div className="space-y-1">
        <label className="text-sm font-medium">Описание</label>
        <textarea
          value={form.description}
          onChange={(e) => update("description", e.target.value)}
          rows={4}
          className="w-full rounded-md border px-3 py-2 text-sm"
        />
      </div>

      <Checkbox
        label="Реклама"
        checked={form.isAds}
        onChange={(v) => {
          update("isAds", v);
          if (v) update("isImportantNew", false);
        }}
      />

      <Checkbox
        label="Важная новость"
        checked={form.isImportantNew}
        onChange={(v) => {
          update("isImportantNew", v);
          if (v) update("isAds", false);
        }}
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`rounded-md border px-4 py-2 text-sm transition
          ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-muted"}
        `}
      >
        {loading ? "Создание..." : "Создать"}
      </button>

      {error && <div className="text-sm text-red-500">{error}</div>}
    </div>
  );
}

/* ===== helpers ===== */

function Input({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border px-3 py-2 text-sm"
      />
    </div>
  );
}

function Checkbox({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex items-center gap-2 text-sm">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      {label}
    </label>
  );
}
