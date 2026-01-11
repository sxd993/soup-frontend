// Cетевой запрос на auth/register и поля формы
export type RegisterFormValues = {
    role: "client" | "doer";
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

// Ответ от сервера при регистрации
export type RegisterResponse = {
    verificationId: string;
}