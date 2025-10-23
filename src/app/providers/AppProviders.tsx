'use client'

import { ReduxProvider } from './redux/Provider'
import { ReactQueryProvider } from './react-query/Provider'

export const AppProviders = ({ children }: { children: React.ReactNode }) => (
    <ReduxProvider>
        <ReactQueryProvider>
            {children}
        </ReactQueryProvider>
    </ReduxProvider>
)
