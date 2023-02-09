'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { FC } from 'react';
import { NextImage } from '../NextImage';
import clsxm from '@/lib/clsxm';
import styles from './Slider.module.css';
import { IAsset } from '@/schema/types';

interface SliderProps {
  items: IAsset[];
  className?: string;
}

export const Slider: FC<SliderProps> = ({ items, className }) => { 
  return (
  <Splide aria-label="Referenzgalerie"
    options={ {
      height   : '30rem',
      gap      : '0.625rem',
      arrowPath: 'm12.77,35.53l-1.06-1.06,14.47-14.47L11.7,5.53l1.06-1.06,15.53,15.53-15.53,15.53Z',
      autoWidth: true,
    } }
    className={clsxm(className, styles.slider)}
  >
    {items.map(({ url, description, width, height }) => (
      <SplideSlide key={url}>
        <NextImage
          src={url}
          alt={description}
          width={width}
          height={height}
          className='w-full h-full object-cover object-bottom'
          sizes='(min-width: 640px) 30vw, (min-width: 1280px) 500px, 100vw'
        />
      </SplideSlide>
    ))}
  </Splide>
)}
