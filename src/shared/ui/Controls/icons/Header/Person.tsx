import type { SVGProps } from 'react';

export const Person = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 27.8481V25.8671C13 23.6835 14.79 21.905 17 21.905H23C25.21 21.905 27 23.6747 27 25.8671V27.8481H13ZM16.06 15.469C16.06 17.3883 17.82 18.9379 20 18.9379C22.18 18.9379 23.94 17.3883 23.94 15.469C23.94 13.5496 22.18 12 20 12C17.82 12 16.06 13.5496 16.06 15.469Z"
      fill="#EBE7DF"
      stroke="#2F2F2F"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);