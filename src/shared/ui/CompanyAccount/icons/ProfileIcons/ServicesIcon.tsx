import type { SVGProps } from 'react'

export const ServicesIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <circle cx="16" cy="16" r="16" fill="currentColor"/>
            <path d="M11 13L21 13" stroke="#535353" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12.4602 9.46311L19.5313 16.5342" stroke="#535353" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12.468 16.534L19.5391 9.46289" stroke="#535353" strokeWidth="2" strokeLinecap="round"/>
            <path d="M16 23.5V8" stroke="#535353" strokeWidth="2" strokeLinecap="round"/>
        </svg>
    )
}
