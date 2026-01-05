// Cетевой запрос на auth/register и поля формы
export type RegisterFormValues = {
    role: "doer" | "client";
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
}