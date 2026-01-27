// Сетевой запрос на auth/forgot-password и поля формы
export type ForgotPasswordFormValues = {
  email: string;
};

// DTO для отправки на сервер
export type ForgotPasswordDto = {
  email: string;
};

// Ответ от сервера
export type ForgotPasswordResponse = {
  success: boolean;
};