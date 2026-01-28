import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { getErrorMessage } from '@/shared/lib/error-handler'
import { AUTH_MESSAGES } from '@/entities/Auth'
import { validateChangeEmailForm, EMAIL_PATTERN } from '@/entities/Auth/model/lib/formValidators'
import { useChangeEmailRequest } from './useChangeEmailRequest'

export const useChangeEmail = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const verificationId = searchParams?.get('id') || ''

  const { mutate, isPending } = useChangeEmailRequest()
  const [newEmail, setNewEmail] = useState('')
  const [serverError, setServerError] = useState<string | null>(null)

  const isFormValid = validateChangeEmailForm(newEmail)

  const onSubmit = () => {
    if (!verificationId) {
      setServerError(AUTH_MESSAGES.changeEmail.missingId)
      return
    }

    const trimmedEmail = newEmail.trim()
    if (!EMAIL_PATTERN.test(trimmedEmail)) {
      setServerError(AUTH_MESSAGES.changeEmail.invalidEmail)
      return
    }

    setServerError(null)
    mutate(
      { verificationId, newEmail: trimmedEmail },
      {
        onSuccess: (response) => {
          setNewEmail('')
          router.replace(`/auth/verify?id=${response.verificationId}`)
        },
        onError: (error: Error) => {
          setServerError(getErrorMessage(error, AUTH_MESSAGES.changeEmail.default))
        },
      },
    )
  }

  return {
    verificationId,
    newEmail,
    setNewEmail,
    serverError,
    isBusy: isPending,
    onSubmit,
    isFormValid,
  }
}