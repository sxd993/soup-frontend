import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from './client'
import { AuthBootstrap } from '../Auth/AuthBootstrap'

export const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {

    return (
        <QueryClientProvider client={queryClient}>
            <AuthBootstrap />
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}
