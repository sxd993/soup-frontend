'use client'

import { ReactQueryProvider } from './react-query/Provider'

export const AppProviders = ({ children }: { children: React.ReactNode }) => (
    <ReactQueryProvider>
        {children}
    </ReactQueryProvider>
)
