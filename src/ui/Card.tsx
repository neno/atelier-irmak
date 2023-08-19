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
  <motion.figure className='relative flex flex-col h-full'>
    <Link href={path} className='relative aspect-[4/3] flex-0 overflow-hidden'>
      <motion.div
        className='w-full h-full'
        whileHover={{
          scale: 1.1,
          transition: { default: { ease: 'easeOut' } },
        }}
      >
        <NextImage
          src={url}
          alt={description}
          width={width}
          height={height}
          className='w-full h-full object-cover object-bottom'
          sizes='(min-width: 1536px) 810px, (min-width: 1280px) 670px, (min-width: 1280px) 670px,(min-width: 1024px) 528px, (min-width: 768px) 390px, 100vw'
        />
      </motion.div>
    </Link>
    <figcaption className='p-4 flex-1 font-title font-light leading-tight text-primary'>
      {text}
    </figcaption>
  </motion.figure>
);
