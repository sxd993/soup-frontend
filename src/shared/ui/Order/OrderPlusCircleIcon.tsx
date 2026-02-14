import type { SVGProps } from "react"

export const OrderPlusCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
    {...props}
  >
    <g clipPath="url(#order-plus-clip)">
      <path
        d="M12 1.71429C17.6571 1.71429 22.2857 6.34286 22.2857 12C22.2857 17.6571 17.6571 22.2857 12 22.2857C6.34286 22.2857 1.71429 17.6571 1.71429 12C1.71429 6.34286 6.34286 1.71429 12 1.71429ZM12 0C5.4 0 0 5.4 0 12C0 18.6 5.4 24 12 24C18.6 24 24 18.6 24 12C24 5.4 18.6 0 12 0Z"
        fill="currentColor"
      />
      <path
        d="M19 11.125H12.875V5H11.125V11.125H5V12.875H11.125V19H12.875V12.875H19V11.125Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="order-plus-clip">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
)
