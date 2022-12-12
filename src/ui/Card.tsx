'use client';

import { IAsset } from '@/schema/types';
import { motion } from 'framer-motion';
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
  <motion.figure
    className='relative flex flex-col h-full'
    whileHover={{
      scale: 1.05,
      boxShadow: '0 20px 25px -5px #cbd5e1, 0 8px 10px -6px #cbd5e1',
    }}
  >
    <Link href={path}>
      <div className='aspect-square flex-0'>
        <NextImage
          src={url}
          alt={description}
          width={width}
          height={height}
          className='w-full h-full object-cover object-bottom'
          sizes='(min-width: 640px) 30vw, (min-width: 1280px) 500px, 100vw'
        />
      </div>
    </Link>
    <figcaption className='p-4 flex-1 xl:text-lg font-title font-extralight leading-tight'>
      {text}
    </figcaption>
  </motion.figure>
);
