import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useVerify } from '@/features/Auth/verify'
import { useResend } from '@/features/Auth/resend'
import { AUTH_MESSAGES } from '@/entities/Auth'
import { getErrorMessage } from '@/shared/lib/error-handler'
import { useProfileRedirect } from '@/features/Auth/profileRedirect'

export const useVerifyForm = (verificationId: string) => {
    const router = useRouter()
    const { onGoProfile } = useProfileRedirect()
    const { mutate, isPending } = useVerify()
    const { mutate: resend, isPending: isResending } = useResend()
    const [serverError, setServerError] = useState<string | null>(null)
    const [code, setCode] = useState<string[]>(['', '', '', ''])
    const inputRefs = useRef<(HTMLInputElement | null)[]>([])

    useEffect(() => {
        inputRefs.current[0]?.focus()
    }, [])

    const handleInputChange = (index: number, value: string) => {
        if (value && !/^\d$/.test(value)) return

        const newCode = [...code]
        newCode[index] = value
        setCode(newCode)

        if (value && index < 3) {
            inputRefs.current[index + 1]?.focus()
        }
    }

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            inputRefs.current[index - 1]?.focus()
        }
    }

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault()
        const pastedData = e.clipboardData.getData('text').slice(0, 4).replace(/\D/g, '')
        if (pastedData) {
            const newCode = [...pastedData.padEnd(4, '')].slice(0, 4)
            setCode(newCode)
            inputRefs.current[Math.min(pastedData.length - 1, 3)]?.focus()
        }
    }

    const onSubmit = () => {
        if (!verificationId) {
            setServerError(AUTH_MESSAGES.verify.missingId)
            return
        }

        const codeString = code.join('')
        if (codeString.length !== 4) {
            setServerError(AUTH_MESSAGES.verify.invalidCode)
            return
        }
        
        setServerError(null)
        mutate(
            { verificationId, code: codeString },
            {
                onSuccess: () => onGoProfile(),
                onError: (error: Error) => {
                    setServerError(getErrorMessage(error, AUTH_MESSAGES.verify.default))
                    setCode(['', '', '', ''])
                    inputRefs.current[0]?.focus()
                }
            }
        )
    }

    const onResend = () => {
        if (!verificationId) {
            setServerError(AUTH_MESSAGES.verify.missingId)
            return
        }

        setServerError(null)
        resend(
            { verificationId },
            {
                onSuccess: (response) => {
                    router.replace(`/auth/verify?id=${response.verificationId}`)
                    setCode(['', '', '', ''])
                    inputRefs.current[0]?.focus()
                },
                onError: (error: Error) => {
                    setServerError(getErrorMessage(error, AUTH_MESSAGES.verify.resendDefault))
                },
            },
        )
    }

    return {
        code,
        inputRefs,
        handleInputChange,
        handleKeyDown,
        handlePaste,
        onSubmit,
        onResend,
        isBusy: isPending,
        isResending,
        serverError,
        verificationId,
    }
}