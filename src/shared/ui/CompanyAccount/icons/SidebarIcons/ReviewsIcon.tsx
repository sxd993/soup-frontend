import type { SVGProps } from 'react'

export const ReviewsIcon = (props: SVGProps<SVGSVGElement>) => {
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
            <path d="M13.075 19.25L16 17.475L18.925 19.25L18.15 15.925L20.75 13.675L17.325 13.4L16 10.25L14.675 13.4L11.25 13.675L13.85 15.925L13.075 19.25ZM7.70711 25.2929C7.07714 25.9229 6 25.4767 6 24.5858V9C6 8.45 6.19583 7.97917 6.5875 7.5875C6.97917 7.19583 7.45 7 8 7H24C24.55 7 25.0208 7.19583 25.4125 7.5875C25.8042 7.97917 26 8.45 26 9V21C26 21.55 25.8042 22.0208 25.4125 22.4125C25.0208 22.8042 24.55 23 24 23H10L7.70711 25.2929ZM9.15 21H24V9H8V22.125L9.15 21Z" fill="#535353"/>
        </svg>
    )
}
