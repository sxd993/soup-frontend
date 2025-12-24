import type { SVGProps } from 'react';

export const RightArrowHome = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={14} cy={14} r={14} fill="white" />
    <path
      d="M6 14C6 13.4477 6.44771 13 7 13L18.175 13L13.2875 8.11253C12.895 7.72003 12.8979 7.08281 13.2938 6.69381C13.6848 6.30964 14.3124 6.31241 14.7 6.70003L21.2929 13.2929C21.6834 13.6834 21.6834 14.3166 21.2929 14.7071L14.7 21.3C14.3124 21.6876 13.6848 21.6904 13.2938 21.3062C12.8979 20.9172 12.895 20.28 13.2875 19.8875L18.175 15L7 15C6.44772 15 6 14.5523 6 14Z"
      fill="#06352D"
    />
  </svg>
);
