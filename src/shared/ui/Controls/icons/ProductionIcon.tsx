import type { SVGProps } from "react"

export const ProductionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="16" cy="16" r="16" fill="white" />
    <rect width="32" height="32" rx="16" fill="white" />
    <path
      d="M6 26V13.975L13 11V13L18 11V14H26V26H6ZM8 24H24V16H16V13.95L11 15.95V14L8 15.325V24ZM15 22H17V18H15V22ZM11 22H13V18H11V22ZM19 22H21V18H19V22ZM26 14H21L22 6H25L26 14Z"
      fill="#535353"
    />
  </svg>
)
