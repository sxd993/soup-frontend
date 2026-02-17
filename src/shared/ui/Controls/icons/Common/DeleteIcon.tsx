import type { SVGProps } from "react";

export const DeleteIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.5 1.5V15.5C14.5 16 14 16.5 13.5 16.5H8.5H3.5C3 16.5 2.5 16 2.5 15.5V1.5"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.5 1.5H16.5"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 0.5H10.5M6.5 5.5V12.5M10.5 5.5V12.5"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
