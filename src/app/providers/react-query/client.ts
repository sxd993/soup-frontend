import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1600 * 30,
            refetchOnWindowFocus: false,
            retry: false
        },
    },
})
