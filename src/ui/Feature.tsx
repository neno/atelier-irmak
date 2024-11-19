import { IAsset, IFeature } from '@/schema/types';
import Link from 'next/link';
import { FC } from 'react';
import { NextImage } from './NextImage';
import { Button } from './Button';
import clsxm from '@/lib/clsxm';

type FeatureProps = Omit<IFeature, '__typename' | 'sys'>

export const Feature: FC<FeatureProps> = ({
  media: { url, description, width, height },
  title,
  text,
  page
}) => (
  <section className='relative flex flex-col h-full gap-4'>
    <div className='relative aspect-[2/1] flex-0 overflow-hidden rounded shadow-lg lg:shadow-slate-500'>
      <div
        className='w-full h-full hover:scale-110 transition-transform duration-300 ease-in-out'
      >
        <NextImage
          src={url}
          alt={description}
          width={width}
          height={height}
          className='w-full h-full object-cover object-bottom'
          sizes='(min-width: 1536px) 460px, (min-width: 1280px) 385px, (min-width: 1024px) 500px, (min-width: 768px) 370px, 100vw'
        />
      </div>
    </div>
    <header>
    <h3 className='mt-2'>{title}</h3>
    </header>
    <p className='flex-1 font-normal'>
      {text}
    
    { page && page.slug && (
        <>
        <br />
        <Button path={`/${page.slug}`} type='ghost'>Mehr</Button>
        </>
    )}
      </p>
  </section>
);
