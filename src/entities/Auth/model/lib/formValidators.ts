import type { LoginFormValues } from '../types/login.types'
import type { RegisterFormValues } from '../types/register.types'
import type { ForgotPasswordFormValues } from '../types/forgot-password.types'
import type { ResetPasswordFormValues } from '../types/reset-password.types'

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const EMAIL_REGEX = EMAIL_PATTERN

/**
 * Валидация формы входа
 */
export const validateLoginForm = (values: Partial<LoginFormValues>): boolean => {
  return Boolean(
    values.email?.trim() &&
    values.password?.trim() &&
    EMAIL_REGEX.test(values.email) &&
    values.password.length >= 6
  )
}

/**
 * Валидация формы регистрации
 */
export const validateRegisterForm = (values: Partial<RegisterFormValues>): boolean => {
  return Boolean(
    values.role &&
    values.name?.trim() &&
    values.name.length >= 2 &&
    values.email?.trim() &&
    EMAIL_REGEX.test(values.email) &&
    values.password?.trim() &&
    values.password.length >= 8 &&
    values.passwordConfirm?.trim() &&
    values.passwordConfirm === values.password
  )
}

/**
 * Валидация формы восстановления пароля
 */
export const validateForgotPasswordForm = (values: Partial<ForgotPasswordFormValues>): boolean => {
  return Boolean(
    values.email?.trim() &&
    EMAIL_PATTERN.test(values.email.trim())
  )
}

/**
 * Валидация формы сброса пароля
 */
export const validateResetPasswordForm = (values: Partial<ResetPasswordFormValues>): boolean => {
  return Boolean(
    values.password?.trim() &&
    values.password.length >= 6 &&
    values.passwordConfirm?.trim() &&
    values.passwordConfirm === values.password
  )
}

/**
 * Валидация email для формы смены email
 */
export const validateChangeEmailForm = (email: string): boolean => {
  return Boolean(
    email.trim() &&
    EMAIL_PATTERN.test(email.trim())
  )
}