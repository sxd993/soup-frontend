import { useState, useRef, useEffect } from 'react'
import { useVerify } from '@/features/Auth/verify'
import { AUTH_MESSAGES } from '@/entities/Auth'
import { useRouter, useSearchParams } from 'next/navigation'
import { getErrorMessage } from '@/shared/lib/error-handler'

export const useVerifyForm = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const verificationId = searchParams?.get('id') || ''
    
    const { mutate, isPending } = useVerify()
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
            setServerError('Введите 4-значный код')
            return
        }
        
        setServerError(null)
        mutate(
            { verificationId, code: codeString },
            {
                onSuccess: () => router.push('/auth/login'),
                onError: (error: Error) => {
                    setServerError(getErrorMessage(error, AUTH_MESSAGES.verify.default))
                    setCode(['', '', '', ''])
                    inputRefs.current[0]?.focus()
                }
            }
        )
    }

    return {
        code,
        inputRefs,
        handleInputChange,
        handleKeyDown,
        handlePaste,
        onSubmit,
        isBusy: isPending,
        serverError,
        verificationId,
    }
}