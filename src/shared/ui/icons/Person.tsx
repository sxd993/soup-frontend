import type { SVGProps } from 'react';

export const Person = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={44}
    height={44}
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={44} height={44} rx={22} fill="#EBE7DF" />
    <path
      d="M12.941 30.8623V28.2986C12.941 25.4729 15.2575 23.1713 18.1175 23.1713H25.8822C28.7422 23.1713 31.0587 25.4615 31.0587 28.2986V30.8623H12.941ZM16.901 14.8423C16.901 17.3262 19.1787 19.3315 21.9999 19.3315C24.821 19.3315 27.0987 17.3262 27.0987 14.8423C27.0987 12.3584 24.821 10.353 21.9999 10.353C19.1787 10.353 16.901 12.3584 16.901 14.8423Z"
      fill="#EBE7DF"
      stroke="#2F2F2F"
      strokeWidth={1.25}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
