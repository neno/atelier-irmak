import Image, { ImageProps } from 'next/image';
import { FC } from 'react';

export const NextImage: FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  ...props
}) => {
  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};
