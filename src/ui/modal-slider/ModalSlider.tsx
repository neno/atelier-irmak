'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import {FC, useEffect, useRef} from 'react';
import { NextImage } from '../NextImage';
import clsxm from '@/lib/clsxm';
import styles from './ModalSlider.module.css';
import { IAsset } from '@/schema/types';

interface SliderProps {
  items: IAsset[];
  className?: string;
}

export const ModalSlider: FC<SliderProps> = ({ items, className }) => {
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);

  useEffect(() => {
    if ( mainRef.current && thumbsRef.current && thumbsRef.current.splide ) {
      mainRef.current.sync( thumbsRef.current.splide );
    }
  });

  return (
    <>
      <Splide
        ref={ mainRef }
        options={ {
          arrowPath: 'm12.77,35.53l-1.06-1.06,14.47-14.47L11.7,5.53l1.06-1.06,15.53,15.53-15.53,15.53Z',
          type      : 'fade',
          rewind    : true,
          pagination: false,
          arrows    : false,
          height    : '70vh'
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
              className='mx-auto h-full w-full object-contain object-center'
              sizes='(min-width: 640px) 30vw, (min-width: 1280px) 500px, 100vw'
            />
          </SplideSlide>
        ))}
      </Splide>
      <Splide
        ref={ thumbsRef }
        options={ {
          arrowPath: 'm12.77,35.53l-1.06-1.06,14.47-14.47L11.7,5.53l1.06-1.06,15.53,15.53-15.53,15.53Z',
          fixedWidth  : 100,
          fixedHeight : 60,
          gap         : 10,
          rewind      : true,
          pagination  : false,
          focus           : 'center',
          cover           : true,
          breakpoints : {
            600: {
              fixedWidth : 60,
              fixedHeight: 44,
            },
          },
        } }
        className={clsxm(className, styles.thumbnailSlider)}
      >
        {items.map(({ url, description, width, height }) => (
          <SplideSlide key={url}>
            <NextImage
              src={url}
              alt={description}
              width={width}
              height={height}
              className='w-full h-full object-cover object-center'
              sizes='6.25rem'
            />
          </SplideSlide>
        ))}
      </Splide>
    </>
  )
}
