// Сетевой запрос на auth/verify и поля формы
export type VerifyFormValues = {
    code: string;
}

// DTO для отправки на сервер
export type VerifyDto = {
    verificationId: string;
    code: string;
}

// Ответ от сервера при подтверждении
export type VerifyResponse = {
    success: boolean;
}