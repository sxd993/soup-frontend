// Сетевой запрос на auth/reset-password и поля формы
export type ResetPasswordFormValues = {
  password: string;
  passwordConfirm: string;
};

// DTO для отправки на сервер
export type ResetPasswordDto = {
  token: string;
  password: string;
  passwordConfirm: string;
};

// Ответ от сервера
export type ResetPasswordResponse = {
  success: boolean;
};