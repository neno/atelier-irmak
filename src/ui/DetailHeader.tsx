import { IAsset } from '@/schema/types';
import { FC } from 'react';
import { NextImage } from './NextImage';

interface DetailHeaderProps {
  title: string;
  image: IAsset;
  galleryItems: IAsset[];
}

export const DetailHeader: FC<DetailHeaderProps> = ({
  title,
  image: { url, description, height, width },
  galleryItems,
}) => {
  return (
    <div className='w-full flex gap-4 h-[29.25rem]'>
      <NextImage
        src={url}
        alt={description}
        width={width}
        height={height}
        className='w-auto h-full'
        sizes='(min-width: 640px) 30vw, (min-width: 1280px) 500px, 100vw'
      />
      <div className='h-full flex-auto bg-gray flex items-center justify-center px-8'>
        <h1 className='text-5xl'>{title}</h1>
      </div>
      {galleryItems.map((asset) => (
        <NextImage
          key={asset.url}
          src={asset.url}
          alt={asset.description}
          width={asset.width}
          height={asset.height}
          className='w-auto h-full'
          sizes='(min-width: 640px) 30vw, (min-width: 1280px) 500px, 100vw'
        />
      ))}
    </div>
  );
};
