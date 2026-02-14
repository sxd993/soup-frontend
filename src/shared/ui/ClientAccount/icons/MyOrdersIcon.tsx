import type { SVGProps } from 'react'

export const MyOrdersIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <circle cx={16} cy={16} r={16} fill="white" />
            <path
                d="M19.2857 8H10.7143C9.76751 8 9 8.84276 9 9.88235V22.1176C9 23.1572 9.76751 24 10.7143 24H19.2857C20.2325 24 21 23.1572 21 22.1176V9.88235C21 8.84276 20.2325 8 19.2857 8Z"
                stroke="#535353"
                strokeWidth={2}
            />
            <path
                d="M12 12H18M12 15.9998H18M12 20H16"
                stroke="#535353"
                strokeWidth={2}
                strokeLinecap="round"
            />
        </svg>
    )
}