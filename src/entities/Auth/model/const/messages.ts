// Текстовые константы для состояний авторизации
export const AUTH_MESSAGES = {
    verify: {
        loading: "Подтверждение...",
        error: "Ошибка при подтверждении",
        success: "Email успешно подтверждён!",
        invalidCode: "Неверный код подтверждения",
        expiredCode: "Код истёк",
        missingId: "Отсутствует ID сессии подтверждения",
        resendDefault: "Ошибка при повторной отправке",
        default: "Произошла ошибка при подтверждении",
    },
    changeEmail: {
        missingId: "Отсутствует ID сессии подтверждения",
        invalidEmail: "Введите корректный e-mail",
        default: "Ошибка при изменении e-mail",
    },
    register: {
        loading: "Регистрация...",
        error: "Ошибка при регистрации",
        success: "Регистрация успешна",
        default: "Произошла ошибка при регистрации",
    },
    login: {
        loading: "Вход...",
        error: "Ошибка при входе",
        success: "Вход выполнен",
        default: "Произошла ошибка при входе",
    },
    forgotPassword: {
        invalidEmail: "Введите корректный e-mail",
        missingEmail: "Введите e-mail",
        success: "Если e-mail зарегистрирован, мы отправили ссылку для сброса пароля.",
        default: "Ошибка при отправке ссылки",
    },
    resetPassword: {
        missingToken: "Отсутствует токен сброса пароля",
        passwordMismatch: "Пароли не совпадают",
        passwordMin: "Минимум 6 символов",
        success: "Пароль обновлён. Войдите с новым паролем.",
        default: "Ошибка при сбросе пароля",
    },
} as const;