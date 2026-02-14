'use client'

import { useCompanyNavigationSidebar } from '../model/hooks/useCompanyNavigationSidebar'
import { ClientNavigationSideBar } from './ClientNavigationSideBar'

const ArrowIcon = ({ isOpen }: { isOpen: boolean }) => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={isOpen ? '' : 'rotate-180'}
    >
        <path
            d="M12.5 5L7.5 10L12.5 15"
            stroke="#2F2F2F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export const ClientNavigationSideBarMobile = () => {
    const { isOpen, toggle, close } = useCompanyNavigationSidebar()

    return (
        <div className="md:hidden">
            <button
                className="fixed left-0 z-50 flex h-12 w-8 -translate-y-1/2 items-center justify-center rounded-r-full bg-white transition-colors"
                type="button"
                onClick={toggle}
                aria-label="Открыть меню"
                style={{ top: '50svh' }}
            >
                <ArrowIcon isOpen={isOpen} />
            </button>
            <div
                className={`fixed inset-0 z-40 bg-black/15 transition-opacity duration-300 ${
                    isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
                }`}
                onClick={close}
                aria-hidden="true"
            />
            <div
                className={`fixed left-0 top-0 z-50 h-full w-72 bg-accent-octonary px-4 py-6 transition-transform duration-300 ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <ClientNavigationSideBar onNavigate={close} />
            </div>
        </div>
    )
}
