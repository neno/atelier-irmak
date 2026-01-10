"use client";

import clsxm from "@/lib/clsxm";
import { CldImage } from "next-cloudinary";
import { FC } from "react";

type CloudinaryImageProps = {
  url: string;
  publicId: string;
  width: number;
  height: number;
  focalPoint?: {
    x: number;
    y: number;
  };
  alt: string;
  priority?: boolean;
  className?: string;
};

export const CloudinaryImage: FC<CloudinaryImageProps> = ({
  url,
  publicId,
  width,
  height,
  focalPoint,
  alt,
  priority = false,
  className = "",
  ...props
}) => {
  const transformations = [
    "quality:80",
    "format:webp",
    "crop:fill",
    "focalpoint:x:0.5,y:0.5",
  ];

  return (
    <CldImage
      src={publicId}
      width={2000}
      height={1000}
      alt={alt ?? ""}
      priority={priority}
      crop="fill"
      format="webp"
      quality="80"
      gravity="south"
      className={className}
      // {...props}
    />
  );
};
