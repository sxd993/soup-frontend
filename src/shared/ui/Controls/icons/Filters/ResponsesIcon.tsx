import type { SVGProps } from "react";

export const ResponsesIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="16" cy="16" r="16" fill="currentColor" />
      <g transform="translate(9, 7)">
        <path
          d="M11.2857 1H2.71429C1.76751 1 1 1.84276 1 2.88235V15.1176C1 16.1572 1.76751 17 2.71429 17H11.2857C12.2325 17 13 16.1572 13 15.1176V2.88235C13 1.84276 12.2325 1 11.2857 1Z"
          stroke="#535353"
          strokeWidth="2"
        />
        <path
          d="M4 5H10M4 8.99984H10M4 13H8"
          stroke="#535353"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};
