import { AxiosError } from 'axios'


 // Функция для извлечения сообщения об ошибке из различных типов ошибок
 
export const getErrorMessage = (error: unknown, defaultMessage: string): string => {
    if (error instanceof AxiosError) {
        return error.response?.data?.message || error.message || defaultMessage
    }
    if (error instanceof Error) {
        return error.message || defaultMessage
    }
    return defaultMessage
}