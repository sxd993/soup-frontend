import type { SVGProps } from 'react';

export const LogoutIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={40} height={40} rx={20} fill="#EBE7DF" />
    <path
      d="M22 12H25C27.2091 12 29 13.7909 29 16V24C29 26.2091 27.2091 28 25 28H22"
      stroke="#2F2F2F"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 24L22 20L18 16"
      stroke="#2F2F2F"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 20H11"
      stroke="#2F2F2F"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);