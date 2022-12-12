'use client';

import { Card } from '../Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper';
import { FC, useReducer, useState } from 'react';
import { ICarousel } from '@/schema/types';
import { Container } from '../Container';
import 'swiper/css/bundle';
import { motion } from 'framer-motion';
// import 'swiper/css/swiper';
// import 'swiper/css/navigation';
// import 'swiper/css/effect-fade';

export const Carousel: FC<ICarousel> = ({
  displayItems,
  autoplay,
  autoplaySpeed,
  itemsCollection: { items },
}) => {
  const [count, setCount] = useState(1);

  // const [anim, setAnim] = useReducer();
  // const carouselSettings = { ...defaultSettings, ...settings };
  const sliderWidth = 480;
  const sliderHeight = 565;
  return (
    <Container className=''>
      <motion.div className='flex gap-8'>
        <div className='relative aspect-square shadow-xl shadow-slate-300 bg-primary'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex culpa,
          obcaecati assumenda cum necessitatibus saepe similique quas molestiae
          reprehenderit, porro accusantium temporibus quam sapiente blanditiis
          ducimus cupiditate alias maiores architecto.
        </div>
        <div className='relative aspect-square shadow-xl shadow-slate-300 bg-primary'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex culpa,
          obcaecati assumenda cum necessitatibus saepe similique quas molestiae
          reprehenderit, porro accusantium temporibus quam sapiente blanditiis
          ducimus cupiditate alias maiores architecto.
        </div>
        <div className='relative aspect-square shadow-xl shadow-slate-300 bg-primary'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex culpa,
          obcaecati assumenda cum necessitatibus saepe similique quas molestiae
          reprehenderit, porro accusantium temporibus quam sapiente blanditiis
          ducimus cupiditate alias maiores architecto.
        </div>
      </motion.div>
      <div className='flex justify-between'>
        <button onClick={() => setCount(count + 1)}>Prev</button>
        <button onClick={() => setCount(count - 1)}>Next</button>
      </div>
    </Container>
  );
};
