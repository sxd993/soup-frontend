import type { SVGProps } from 'react';

export const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={44}
    height={44}
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="44" height="44" rx="22" fill="#EBE7DF" />
    <path d="M14 31L30.9706 14.0294" stroke="#2F2F2F" />
    <path d="M14 14L30.9706 30.9706" stroke="#2F2F2F" />
  </svg>
);