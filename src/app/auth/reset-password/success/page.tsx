import { ResetPasswordSuccess } from '@/widgets/Auth/ResetPasswordSuccess'

export default function ResetPasswordSuccessPage() {
  return (
    <main className="flex items-center justify-center py-28 my-auto">
      <div className="w-full max-w-[520px] rounded-[40px] bg-white py-5 px-10">
        <ResetPasswordSuccess />
      </div>
    </main>
  )
}