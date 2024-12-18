import { FC } from 'react';
import { IHero } from '@/schema/types';
import clsxm from '@/lib/clsxm';
import styles from './LandingPageHero.module.css';
import { Container } from '@/ui/Container';
import { NextImage } from '@/ui/NextImage';
import { HeroSlider } from '@/ui/hero/components/hero-slider/Slider';

export const LandingPageHero: FC<
  Pick<IHero, 'title' | 'image' | 'sliderCollection'>
> = ({ image, title, sliderCollection: { items: sliderItems } }) => {
  const showSlider = sliderItems && sliderItems.length > 0;
  return (
    <Container
      className={clsxm(
        'relative rounded lg:grid lg:grid-cols-12 px-0 lg:pb-16 lg:mb-16',
        'md:aspect-[2/1]'
      )}
    >
      {showSlider && <HeroSlider items={sliderItems} />}
      {!showSlider && image && (
        <div className={clsxm(styles.imageWrapper)}>
          <NextImage
            src={image.url}
            width={image.width}
            height={image.height}
            alt={image.description}
            priority={true}
            className={clsxm(
              'aspect-square md:aspect-[2/1] object-cover object-center'
            )}
            sizes='(min-width: 90em) 90rem, 100vw'
          />
        </div>
      )}
      <div className={clsxm(styles.textWrapper)}>
        <h1
          className={clsxm(
            styles.title,
            'overflow-hidden text-white text-center text-xl lg:text-left lg:text-3xl font-title leading-relaxed lg:leading-tight'
          )}
        >
          {title}
        </h1>
      </div>
    </Container>
  );
};
