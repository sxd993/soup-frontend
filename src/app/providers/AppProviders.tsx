'use client'

import { Toaster } from 'sonner'
import { ReactQueryProvider } from './react-query/Provider'

export const AppProviders = ({ children }: { children: React.ReactNode }) => (
    <ReactQueryProvider>
        {children}
        <Toaster position="top-right" richColors closeButton />
    </ReactQueryProvider>
)
