import type { SVGProps } from "react";

export const PlusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 15.5789V0.421053C8 0.188512 8.21069 0 8.47059 0C8.73049 0 8.94118 0.188512 8.94118 0.421053V15.5789C8.94118 15.8115 8.73049 16 8.47059 16C8.21069 16 8 15.8115 8 15.5789Z"
        fill="#C5C2C2"
      />
      <path
        d="M0.421053 7L15.5789 7C15.8115 7 16 7.22386 16 7.5C16 7.77614 15.8115 8 15.5789 8L0.421053 8C0.188512 8 -3.19306e-08 7.77614 -2.05701e-08 7.5C-9.20954e-09 7.22386 0.188512 7 0.421053 7Z"
        fill="#C5C2C2"
      />
    </svg>
  );
};
