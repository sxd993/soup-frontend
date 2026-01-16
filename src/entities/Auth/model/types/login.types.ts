// Cетевой запрос на auth/login и поля формы
export type LoginFormValues = {
    email: string;
    password: string;
}

// Ответ от сервера при логине
export type LoginResponse = {
    accessToken: string;
}