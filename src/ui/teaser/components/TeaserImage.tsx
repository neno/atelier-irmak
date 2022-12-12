import { IAsset } from '@/schema/types';
import { NextImage } from '@/ui/NextImage';
import { FC } from 'react';

interface TeaserImageProps {
  image: IAsset;
}
export const TeaserImage: FC<TeaserImageProps> = ({ image }) => (
  <NextImage
    src={image.url}
    width={image.width}
    height={image.height}
    alt={image.description}
    className='w-full h-full object-cover object-bottom'
  />
);
