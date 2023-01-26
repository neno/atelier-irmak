import { FC } from 'react';
import { IHero } from '@/schema/types';
import clsxm from '@/lib/clsxm';
import styles from './LandingPageHero.module.css';
import { Container } from '@/ui/Container';
import { NextImage } from '@/ui/NextImage';

export const LandingPageHero: FC<Pick<IHero, 'title' | 'image'>> = ({
  image,
  title,
}) => {
  return (
    <Container
      className={clsxm(
        'relative sm:grid sm:grid-cols-12 sm:pb-16',
        'sm:aspect-[2/1]'
      )}
    >
      <div className={clsxm(styles.imageWrapper)}>
        <NextImage
          src={image.url}
          width={image.width}
          height={image.height}
          alt={image.description}
          priority={true}
          className={clsxm('aspect-square md:aspect-[2/1] object-cover object-center')}
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
