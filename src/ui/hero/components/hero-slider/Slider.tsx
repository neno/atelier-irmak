'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { FC } from 'react';
import { IAsset } from '@/schema/types';
import { NextImage } from '@/ui/NextImage';

interface HeroSliderProps {
  items: IAsset[];
}

export const HeroSlider: FC<HeroSliderProps> = ({ items }) => {
  return (
    <Splide
      className='shadow-xl lg:shadow-slate-500 col-span-12 pb-0'
      options={{
        arrows: false,
        pagination: false,
        autoplay: true,
        type: 'fade',
        rewind: true,
      }}
    >
      {items.map(({ url, description, width, height }, index) => (
        <SplideSlide key={url}>
          <NextImage
            src={url}
            alt={description}
            width={width}
            height={height}
            className='aspect-square md:aspect-[2/1] object-cover object-center'
            sizes='(min-width: 1536px) 1510px, 100vw'
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};
