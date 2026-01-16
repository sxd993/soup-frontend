// Cетевой запрос на auth/register и поля формы
export type RegisterFormValues = {
    role: "client" | "company";
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

// Ответ от сервера при регистрации
export type RegisterResponse = {
    verificationId: string;
}