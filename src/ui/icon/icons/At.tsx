import { FC } from "react";
import { IIconSvg } from "../Icon.types";

export const At: FC<IIconSvg> = ({ width = 24, height = 24, className }) => (
  <svg
    aria-hidden="true"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    strokeWidth={1.5} stroke="currentColor"
    fill="none"
    // className={className}
    className="w-6 h-6"
  >
    <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
  </svg>
);
