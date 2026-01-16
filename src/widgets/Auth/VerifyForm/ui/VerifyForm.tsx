'use client'

import { Button } from '@/shared/ui'
import Link from 'next/link'
import { useVerifyForm } from '../hooks/useVerifyForm'

export const VerifyForm = () => {
    const {
        code,
        inputRefs,
        handleInputChange,
        handleKeyDown,
        handlePaste,
        onSubmit,
        isBusy,
        serverError,
        verificationId
    } = useVerifyForm()

    if (!verificationId) {
        return (
            <div className="p-4 rounded-lg bg-red-50 border border-red-200">
                <p className="text-sm text-red-600 text-center">Отсутствует ID сессии подтверждения</p>
            </div>
        )
    }

    return (
        <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
            {/* Ошибка сервера */}
            {serverError && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200">
                    <p className="text-sm text-red-600 text-center">{serverError}</p>
                </div>
            )}

            {/* Текст с инструкцией */}
            <p className="text-base font-normal leading-[110%] text-center text-secondary">
                На указанный e-mail отправили код подтверждения.
            </p>

            {/* Поля для кода */}
            <div className="flex gap-[10px] justify-center" onPaste={handlePaste}>
                {code.map((digit, index) => (
                    <input
                        key={index}
                        ref={(el) => { inputRefs.current[index] = el }}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className="w-[40px] h-[60px] text-center text-xl font-semibold border-2 border-[#C5C2C2] rounded-[10px] focus:border-primary focus:outline-none transition-colors"
                    />
                ))}
            </div>

            {/* Кнопка отправки */}
            <div className="flex justify-center mt-5">
                <Button
                    onClick={onSubmit}
                    disabled={isBusy || code.join('').length !== 4}
                    className="rounded-full bg-primary px-19 py-2 transition hover:bg-accent flex justify-center"
                    type="submit"
                >
                    <p className="text-accent-senary font-semibold text-base leading-[140%]">
                        {isBusy ? 'Отправка...' : 'Отправить'}
                    </p>
                </Button>
            </div>

            {/* Ссылка на изменение email */}
            <div className="flex items-center justify-center gap-2">
                <span className="text-sm text-gray-500">Не приходит код?</span>
                <Link
                    href="/auth/register"
                    className="text-sm text-primary border-b leading-[130%] hover:text-accent transition"
                >
                    Изменить e-mail
                </Link>
            </div>
        </form>
    )
}