"use client"

import {FC, useEffect} from "react";
import { IModal } from '@/schema/types';
import { ReactPortal } from "@/ui/ReactPortal";
import {XMarkIcon} from "@heroicons/react/24/solid";

export const Modal: FC<IModal> = ({children, isOpen, handleClose}) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: { key: string }) => e.key === "Escape" ? handleClose() : null;

    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div className="fixed inset-0 z-10">
        <button
          type="button"
          className="absolute z-10 right-6 top-6 rounded-full bg-transparent text-primary border opacity-70 hover:opacity-90 p-2 md:p-4"
          onClick={handleClose}
        >
          <span className="sr-only">Close panel</span>
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="flex h-full bg-white items-end justify-center text-center md:items-center p-4 md:py-6">
          <div className="relative transform overflow-hidden text-left w-full">
            {children}
          </div>
        </div>
      </div>
    </ReactPortal>
  )
}
