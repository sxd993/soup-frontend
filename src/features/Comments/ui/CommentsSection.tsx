import { Button } from "@/shared/ui"

export function CommentsSection() {
  return (
    <div className="flex flex-col gap-6">
      {/* Форма добавления комментария */}
      <form className="flex flex-col gap-4">
        <textarea
          placeholder="Напишите комментарий"
          rows={3}
          className="w-full px-4 py-3 rounded-[10px] border border-[#C5C2C2] focus:outline-none text-sm text-[#C5C2C2] resize-none"
        />
        <div className="flex justify-end">
          <Button text="Отправить" />
        </div>
      </form>
    </div>
  )
}
