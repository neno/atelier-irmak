import { IAsset } from '@/schema/types';
import Link from 'next/link';
import { FC } from 'react';
import { NextImage } from './NextImage';

interface CardProps {
  path: string;
  image: IAsset;
  text: string;
}

export const Card: FC<CardProps> = ({
  path,
  image: { url, description, width, height },
  text,
}) => (
  <figure className='relative flex flex-col h-full'>
    <Link href={path} className='relative aspect-[4/3] flex-0 overflow-hidden'>
      <div
        className='w-full h-full hover:scale-110 transition-transform duration-300 ease-in-out rounded overflow-hidden'
      >
        <NextImage
          src={url}
          alt={description}
          width={width}
          height={height}
          className='w-full h-full object-cover object-bottom'
          sizes='(min-width: 1536px) 810px, (min-width: 1280px) 670px, (min-width: 1280px) 670px,(min-width: 1024px) 528px, (min-width: 768px) 390px, 100vw'
        />
      </div>
    </Link>
    <figcaption className='p-4 flex-1 font-title font-light leading-tight text-primary'>
      {text}
    </figcaption>
  </figure>
);
