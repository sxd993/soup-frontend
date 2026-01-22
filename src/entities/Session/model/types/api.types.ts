// Типы для API ответов
type AppRole = 'client' | 'company'

export type MeResponse = {
    role: AppRole 
    sub?: string
    id?: string
}
