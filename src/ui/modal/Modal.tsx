"use client"

import {FC, useEffect} from "react";
import { IModal } from '@/schema/types';
import { ReactPortal } from "@/ui/ReactPortal";

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
        <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" onClick={handleClose} />
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center overflow-y-auto">
          <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl sm:my-8 sm:w-full max-w-7xl sm:p-6">
            {children}
          </div>
        </div>
      </div>
    </ReactPortal>
  )
}
