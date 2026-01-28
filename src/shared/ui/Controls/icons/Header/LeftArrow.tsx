import type { SVGProps } from 'react';

export const LeftArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={44}
    height={44}
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx="22"
      cy="22"
      r="22"
      transform="matrix(-1 0 0 1 44 0)"
      fill="#EBE7DF"
    />
    <path
      d="M20.6008 26L17.6667 22.5M20.6067 19L17.6725 22.5H27"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);