// Типы для API ответов
export type MeResponse = {
    id: string
    email: string
    name: string
    role: 'client' | 'company'
}