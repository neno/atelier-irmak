import { FC } from 'react';
import { NextImage } from '../NextImage';
import { IAsset } from '@/schema/types';
import { Container } from '../Container';
import clsxm from '@/lib/clsxm';
import styles from './Hero.module.css';

interface HeroProps {
  image: IAsset;
  title: string;
}

export const Hero: FC<HeroProps> = ({ image, title }) => {
  return (
    <Container
      className={
        clsxm('relative grid grid-cols-12 pb-16', 'aspect-square aspect-[2/1]')
        // 'relative grid grid-cols-12 pb-16'
        // 'aspect-square aspect-[2/1]'
      }
    >
      <div className={clsxm(styles.imageWrapper)}>
        <NextImage
          src={image.url}
          width={image.width}
          height={image.height}
          alt={image.description}
          priority={true}
          className='aspect-square md:aspect-[2/1] object-cover object-center'
          sizes='(min-width: 90em) 90rem, 100vw'
        />
      </div>
      <div className={clsxm(styles.textWrapper)}>
        <h1
          className={clsxm(
            styles.title,
            'text-white text-xl lg:text-3xl font-title leading-relaxed lg:leading-tight'
          )}
        >
          {title}
        </h1>
      </div>
    </Container>
  );
};
