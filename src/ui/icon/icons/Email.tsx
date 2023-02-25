import { FC } from "react";
import { IIconSvg } from "@/ui/icon/Icon.types";

export const Email: FC<IIconSvg> = ({ width = 24, height = 24, className }) => (
  <svg
    aria-hidden="true"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="0.5"/>
    <path fill="currentColor" d="m16.75,8.14s0-.01,0-.02c0,0,0-.01,0-.02,0,0,0-.01,0-.02,0,0,0-.01,0-.02,0,0,0-.01,0-.02,0,0,0-.01-.01-.02,0,0,0,0,0-.01,0,0,0,0,0,0,0,0-.01-.01-.02-.01,0,0,0,0-.01-.01,0,0-.01,0-.02-.01,0,0-.01,0-.02,0,0,0-.01,0-.02,0,0,0-.01,0-.02,0,0,0-.01,0-.02,0,0,0-.01,0-.02,0,0,0,0,0,0,0H6.95s0,0,0,0c0,0-.01,0-.02,0,0,0-.01,0-.02,0,0,0-.01,0-.02,0,0,0-.01,0-.02,0,0,0-.01,0-.02,0,0,0-.01,0-.02,0,0,0,0,0-.01.01,0,0-.01,0-.02.01,0,0,0,0,0,0,0,0,0,0,0,.01,0,0,0,.01-.01.02,0,0,0,.01,0,.02,0,0,0,.01,0,.02,0,0,0,.01,0,.02,0,0,0,.01,0,.02,0,0,0,.01,0,.02,0,0,0,0,0,.01v6.8c0,.33.27.6.6.6h8.8c.33,0,.6-.27.6-.6v-6.8s0,0,0-.01Zm-.71.21l-4.29,3.93-4.29-3.93h8.57Zm.11,6.8H7.35c-.11,0-.2-.09-.2-.2v-6.35l4.46,4.09c.08.07.19.07.27,0l4.46-4.09v6.35c0,.11-.09.2-.2.2Z"/>
  </svg>
);