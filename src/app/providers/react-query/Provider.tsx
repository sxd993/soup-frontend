'use client'

import { useEffect } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from './client'
import { attachAuthInterceptors } from '@/shared/api/interceptors/attachAuth'
import { AuthBootstrap } from '../Auth/AuthBootstrap'

export const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {

    // Один раз при монтировании компонента добавляем перехватчики для авторизации
    useEffect(() => {
        attachAuthInterceptors(queryClient)
    }, [])

    return (
        <QueryClientProvider client={queryClient}>
            <AuthBootstrap />
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}
